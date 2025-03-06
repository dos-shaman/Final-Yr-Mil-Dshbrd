export async function GET() {
    // Sample soldier data
    const soldiers = [
        { name: "John Doe", strength: 85, stamina: 80, accuracy: 70, weapon_proficiency: 78, engineering: 50, health_knowledge: 60, tactical_knowledge: 65, high_pressure_performance: 70, problem_solving: 75 },
        { name: "Jane Smith", strength: 90, stamina: 85, accuracy: 65, weapon_proficiency: 82, engineering: 60, health_knowledge: 70, tactical_knowledge: 75, high_pressure_performance: 78, problem_solving: 80 },
        { name: "Sam Wilson", strength: 92, stamina: 90, accuracy: 88, weapon_proficiency: 95, engineering: 80, health_knowledge: 85, tactical_knowledge: 90, high_pressure_performance: 92, problem_solving: 90 },
        { name: "Emily Davis", strength: 88, stamina: 86, accuracy: 72, weapon_proficiency: 89, engineering: 65, health_knowledge: 75, tactical_knowledge: 78, high_pressure_performance: 85, problem_solving: 88 },
        { name: "Michael Brown", strength: 75, stamina: 70, accuracy: 68, weapon_proficiency: 72, engineering: 55, health_knowledge: 65, tactical_knowledge: 68, high_pressure_performance: 72, problem_solving: 70 },
        { name: "Olivia White", strength: 80, stamina: 78, accuracy: 82, weapon_proficiency: 85, engineering: 75, health_knowledge: 80, tactical_knowledge: 85, high_pressure_performance: 88, problem_solving: 84 },
        { name: "Liam Scott", strength: 95, stamina: 92, accuracy: 90, weapon_proficiency: 96, engineering: 85, health_knowledge: 88, tactical_knowledge: 92, high_pressure_performance: 95, problem_solving: 92 },
        { name: "Sophia Miller", strength: 70, stamina: 72, accuracy: 74, weapon_proficiency: 76, engineering: 78, health_knowledge: 80, tactical_knowledge: 75, high_pressure_performance: 78, problem_solving: 76 },
        { name: "Ethan Johnson", strength: 85, stamina: 87, accuracy: 88, weapon_proficiency: 89, engineering: 90, health_knowledge: 85, tactical_knowledge: 88, high_pressure_performance: 89, problem_solving: 87 },
        { name: "Ava Thompson", strength: 77, stamina: 79, accuracy: 81, weapon_proficiency: 82, engineering: 70, health_knowledge: 75, tactical_knowledge: 78, high_pressure_performance: 80, problem_solving: 79 },
        { name: "Noah Martinez", strength: 90, stamina: 88, accuracy: 85, weapon_proficiency: 92, engineering: 85, health_knowledge: 87, tactical_knowledge: 90, high_pressure_performance: 91, problem_solving: 89 },
        { name: "Isabella Robinson", strength: 65, stamina: 68, accuracy: 70, weapon_proficiency: 72, engineering: 75, health_knowledge: 78, tactical_knowledge: 72, high_pressure_performance: 75, problem_solving: 73 },
        { name: "William Harris", strength: 82, stamina: 85, accuracy: 87, weapon_proficiency: 90, engineering: 88, health_knowledge: 85, tactical_knowledge: 89, high_pressure_performance: 87, problem_solving: 86 }
    ];
    

    return Response.json(soldiers, { status: 200 });
}
