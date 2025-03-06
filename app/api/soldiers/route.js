export async function GET() {
    // Sample soldier data
    const soldiers = [
        { name: "John Doe", strength: 85, stamina: 80, accuracy: 70, weapon_proficiency: 78, engineering: 50, health_knowledge: 60, tactical_knowledge: 65, high_pressure_performance: 70, problem_solving: 75 },
        { name: "Jane Smith", strength: 90, stamina: 85, accuracy: 65, weapon_proficiency: 82, engineering: 60, health_knowledge: 70, tactical_knowledge: 75, high_pressure_performance: 78, problem_solving: 80 },
        { name: "Sam Wilson", strength: 92, stamina: 90, accuracy: 88, weapon_proficiency: 95, engineering: 80, health_knowledge: 85, tactical_knowledge: 90, high_pressure_performance: 92, problem_solving: 90 }
    ];

    return Response.json(soldiers, { status: 200 });
}
