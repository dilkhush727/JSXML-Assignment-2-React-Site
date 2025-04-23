export default function SkillCategory({ skills }) {
    const byCat = skills.reduce((acc, s) => {
      (acc[s.category] = acc[s.category] || []).push(s)
      return acc
    }, {})
  
    return (
      <>
        {Object.entries(byCat).map(([cat, items]) => (
          <div key={cat} className="skill-group">
            <h3>{cat}</h3>
            <ul>
              {items.map(i => <li key={i._id}>{i.name} ({i.level})</li>)}
            </ul>
          </div>
        ))}
      </>
    )
  }
  