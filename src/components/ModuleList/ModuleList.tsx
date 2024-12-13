'use client'

import { Minus } from '@/icons/Minus'
import { Plus } from '@/icons/Plus'
import clsx from 'clsx'
import { motion } from 'motion/react'
import { KeyboardEvent, useState } from 'react'
import styles from './ModuleList.module.scss'

interface Props {
  title: string
  skills: Array<string>
}
export const ModuleList = ({ title, skills }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModule = () => {
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleModule()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.separator}></div>
      <div className={styles.module}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.list}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <div
          onClick={toggleModule}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role='button'
          aria-expanded={isOpen}
          className={clsx(styles.mobile_module, isOpen && styles.open)}
        >
          {isOpen ? <Minus /> : <Plus />}
          {title}
        </div>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : '0', opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={styles.skills}
        >
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
