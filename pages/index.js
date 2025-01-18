import Link from 'next/link'

const disciplines = [
  { name: 'Computer', path: '/computer' },
  { name: 'Civil', path: '/civil' },
  { name: 'Mechanical', path: '/mechanical' },
  { name: 'Electrical', path: '/electrical' },
  { name: 'Electronics', path: '/electronics' },
  { name: 'Architecture', path: '/architecture' },
  { name: 'Agriculture', path: '/agriculture' },
  { name: 'Aerospace', path: '/aerospace' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-green-400">Engineering Disciplines</h1>
        <p className="text-xl text-center mb-12 text-gray-300">Explore the diverse fields shaping our technological future.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((discipline) => (
            <Link 
              key={discipline.path} 
              href={discipline.path}
              className="block p-6 bg-gray-900 rounded-lg border border-green-500 hover:bg-gray-800 transition-colors duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold mb-2 text-green-400">{discipline.name}</h2>
              <p className="text-gray-300">Discover innovations in {discipline.name.toLowerCase()} engineering.</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

