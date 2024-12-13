import { Program } from '@/app/page'
import { ModuleList } from '../ModuleList/ModuleList'
import styles from './ProgramCard.module.scss'

interface Props {
  program: Program
}
export const ProgramCard = ({ program }: Props) => {
  const specialized = program.specializedSubjects[0]
  const skills = specialized.skills.map(el => el.title)

  return (
    <div className={styles.card}>
      <h2>{program.title}</h2>

      <div className={styles.modules}>
        <ModuleList title='1 модуль' skills={skills.slice(0, 5)} />
        <ModuleList title='2 модуль' skills={skills.slice(5)} />
      </div>
    </div>
  )
}
