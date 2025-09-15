import { useState } from "react";
import styles from "./TaskItem.module.css"

export default function TaskItem({
    task,
    toggleTask,
    deleteTask,
    editTask,
    isCompletesList = false,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(task.text)

  const handleEdit = () => {
    if (isCompletesList) return
    if (isEditing && newText.trim()) {
        editTask(task.id, newText)
    }
    setIsEditing(!isEditing)
  }

  return (
    <li className={styles.item}>
        {isEditing ? (
            <input
              className={styles.input}
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
        ) : (
          <span
            className={`${styles.text} ${
                task.completed ? styles.completed : ""
            } ${isCompletesList ? styles.completedHighlight : ""}`}
            onClick={() => !isCompletesList && toggleTask(task.id)}
            >
              {task.text}
            </span>
        )}

        <div className={styles.actions}>
            {!isCompletesList && (
                <button onClick={handleEdit} className={styles.edit}>
                    {isEditing ? "" : ""}
                </button>
            )}
            <button 
            onClick={() => deleteTask(task.id)}
            className={styles.delete}
            >
                {isCompletesList ? "↩" : "❌"}
            </button>
        </div>

    </li>
  )
}