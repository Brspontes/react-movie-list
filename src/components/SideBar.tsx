import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface sidebarProps {
  genres: GenreResponseProps[],
  handleClickButton: (id: number) => void,
  genreSelected: number
}

export function SideBar({genres, handleClickButton, genreSelected}: sidebarProps) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={genreSelected === genre.id}
            />
          ))}
        </div>
      </nav>
  )
}