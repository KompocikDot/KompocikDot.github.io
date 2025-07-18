import { JSX } from "react"
import { Python, Go, Typescript, Svelte, CSS, Gitlab, Django, AWS } from "./icons"

type ExperienceItemProps = {
  companyName: string,
  technologies: JSX.Element[],
  description: string,
  startedAt: string,
  finishedAt?: string,
}

const data: ExperienceItemProps[] = [
  {
    companyName: "Antmicro",
    technologies: [
      <Go key="go" />,
      <Python key="python" />,
      <Typescript key="typescript" />,
      <Svelte key="svelte" />,
      <CSS key="css" />,
      <Gitlab key="gitlab" />,
    ],
    description: "As a backend intern, I'm developing internal company tools in Go, Python, and TypeScript with the possibility of them being open-sourced. ",
    startedAt: new Intl.DateTimeFormat("en", { year: 'numeric', month: "long" }).format(new Date(2024, 7, 1)),
    finishedAt: undefined,
  },
  {
    companyName: "Bluerider.Software",
    technologies: [
      <Python key="python" />,
      <Django key="django" />,
      <AWS key="aws" />,
    ],
    description: "As Python backend intern I was responsible for developing backend in Django(DRF), testing and documenting it as well as integrating our product with AWS services such as SES and SNS",
    startedAt: new Intl.DateTimeFormat("en", { year: 'numeric', month: "long" }).format(new Date(2022, 7, 1)),
    finishedAt: new Intl.DateTimeFormat("en", { year: 'numeric', month: "long" }).format(new Date(2022, 9, 1)),
  },
]

export default function ExperienceList() {
  return <div className="my-10">
    <div className="text-4xl mb-2">Experience</div>
    <div className="w-full flex flex-col gap-5">
      {data.map(hireData => <ExperienceItem key={hireData.companyName} {...hireData} />)}
    </div>
  </div>
}

function ExperienceItem(props: ExperienceItemProps): JSX.Element {
  return <div className="border-3 border-aquamarine-700 p-5 rounded-lg flex flex-col">
    <div className="text-2xl text-aquamarine-500">{props.companyName}</div>
    <div>{props.description}</div>
    <div className="flex w-full justify-around gap-3 h-8 my-5">{props.technologies}</div>
    <div>{props.startedAt} - {props.finishedAt ?? 'now'}</div>
  </div>
}
