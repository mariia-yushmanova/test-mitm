import { ProgramList } from '@/components/ProgramList/ProgramList'

export type Program = {
  id: number
  title: string
  specializedSubjects: Specialized[]
}

export type Specialized = {
  skills: { title: string }[]
}

const getProgram = async (title: string) => {
  const queryString = new URLSearchParams({ title }).toString()

  try {
    const response = await fetch(
      `https://api.moscow.mba/products?${queryString}`,
    )

    return response.json()
  } catch (e) {
    console.error(e)
    return undefined
  }
}

export default async function Home() {
  const programsFirst = await getProgram('Антикризисное управление')
  const programsSecond = await getProgram('Управление малым бизнесом')

  const programs = [programsFirst[1], programsSecond[1]]

  return (
    <div>
      <ProgramList programs={programs} />
    </div>
  )
}
