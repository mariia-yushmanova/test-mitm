'use client'

import { Program } from '@/app/page'
import clsx from 'clsx'
import { motion, useReducedMotion } from 'motion/react'
import { ProgramCard } from '../ProgramCard/ProgramCard'
import styles from './ProgramList.module.scss'

interface Props {
  programs: Program[]
}

export const ProgramList = ({ programs }: Props) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Специализированные дисциплины</h1>
      {programs.length > 0 ? (
        programs.map(program => (
          <ProgramCard key={program.id} program={program} />
        ))
      ) : (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          Загружаем программы ...
        </motion.p>
      )}

      <div className={styles.block_container}>
        <div className={clsx(styles.block, styles.practice)}>
          <h1>Практические модули</h1>
          <p>
            Работа над собственными проектами: практика групповых
            взаимодействий, кейс-методы, эссе
          </p>
        </div>

        <div className={clsx(styles.block, styles.attestation)}>
          <h1>Итоговая аттестация</h1>
          <ul>
            <li>
              Бизнес-проектирование (подготовка итоговой аттестационной работы,
              консультирование по бизнес-проектированию)
            </li>
            <li>Защита итоговой аттестационной работы</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
