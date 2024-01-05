export interface Tarefa {
    id?: number;
    titulo: string;
    data: Date;
    status: number;
 }

// --- STATUS ---
// 0 - Em progresso
// 1 - Concluida
// 2 - Pausada