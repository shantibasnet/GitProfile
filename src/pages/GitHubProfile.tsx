import { useEffect, useState } from "react";
import { IProfileCard } from "../types/ProfileCard";
import { IRepository } from "../types/RepositoryList";
import styles from "./GitHubProfile.module.css"


function GitHubProfile() {
  const [profile, setProfile] = useState<IProfileCard>([]);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/shantibasnet"
        );
        const data: IProfileCard  = await response.json();
        setProfile(data);
        const repoResponse = await fetch(
          `https://api.github.com/users/shantibasnet/repos`
        );
        const repoData: IRepository[] = await repoResponse.json();
        setRepositories(repoData);

      } catch (error) {}
    };
    
    fetchData();
  }, []);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.container}>
      <ul className={styles.propertyList}>
      <h2 className="title">{profile.login}  </h2>
      <li><strong>Created At:</strong> {profile.created_at}</li>
      <li><strong>ID:</strong> {profile.id} </li></ul>
    <img src={profile.avatar_url} alt={`${profile.login}'s Avatar`} className={styles.avatar} />
      </div>
    
      
      <div className={styles.repositoryBlock}>
      <h2 className={styles.title}>Repositories</h2>
  <ul className={styles.list}>
    {repositories.map((repo) => (
      <li key={repo.id}>
        <a href={repo.html_url}>{repo.name}</a>
        <p className={styles.description}>{repo.description}</p>
      </li>
    ))}
  </ul>
</div>
</div>
  )
}

export default GitHubProfile;