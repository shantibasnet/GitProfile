export interface IRepository {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    created_at: string;
    updated_at: string;
} 