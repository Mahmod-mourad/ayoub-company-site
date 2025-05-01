interface TeamMemberProps {
  member: {
    id: number
    name: string
    position: string
    image: string
    bio: string
  }
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-blue-600 mb-2">{member.position}</p>
        <p className="text-gray-600 text-sm">{member.bio}</p>
      </div>
    </div>
  )
}
