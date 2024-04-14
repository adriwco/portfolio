import ThemeToggle from '../components/ThemeToggle';
import CustomContainer from './CustomContainer';
import LiNavH from '../components/LiNavH';

const Header = () => {
  return (
    <header className="py-10 bg-fundo-1 dark:bg-fundo-0">
      <CustomContainer>
        <div className="flex items-center justify-between">
          <div className="w-[150px] h-[38px] bg-logo dark:bg-logo-d"></div>
          <div className="flex items-center">
            <nav>
              <ul className="flex items-center gap-4">
                <li>
                  <LiNavH to="/">Home</LiNavH>
                </li>
                <li>
                  <LiNavH to="/experiencia">Experiência</LiNavH>
                </li>
                <li>
                  <LiNavH to="/formacao">Formação</LiNavH>
                </li>
                <li>
                  <LiNavH to="/contato">Contato</LiNavH>
                </li>
                <li>
                  <LiNavH to="https://github.com/adriwco">GitHub</LiNavH>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
