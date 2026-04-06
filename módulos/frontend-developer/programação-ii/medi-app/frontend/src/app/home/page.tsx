import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link href="/doctor/create">Create new Doctor</Link>
        <br></br>
        <Link href="/doctor/list">List all doctors</Link>
        <br></br>
        <Link href="/pacient/create">Create new Pacient</Link>
        <br></br>
        <Link href="/appointment/create">Create new Appointment</Link>
        <br></br>
        <Link href="/prescription/create">Create new Prescription</Link>
        <br></br>
        <Link href="/prescription/upload">Upload Prescription</Link>
        <br></br>
        <br></br>
        <Link href="/fake">Access FakeApi</Link>
      </div>
    </>
  );
}