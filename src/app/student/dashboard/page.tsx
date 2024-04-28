import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-2">
      <Link href="/student/kontrakter" className="border m-2 p-4 rounded-lg hover:bg-lightgray">
        <p className="text-center text-2xl">Kontrakter</p>
      </Link>
      <Link href="/bedrift/tilbakemeldinger" className="border m-2 p-4 rounded-lg hover:bg-lightgray">
        <p className="text-center text-2xl">Alle tilbakemeldinger</p>
      </Link>{" "}
      <div className="border m-2 p-4 rounded-lg hover:bg-lightgray">
        <p className="text-center text-2xl">Send ut spørreundersøkelse</p>
      </div>{" "}
    </div>
  )
}
