import { Calculator } from "./components/Calculator"
import { History } from "./components/History"

export function App() {
  return (
    <main className="py-28 px-4 sm:px-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-2">
      <Calculator />
      <History />
    </main>
  )
}