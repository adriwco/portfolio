import CustomContainer from './CustomContainer';
import Fotografia from '../assets/perfil/adriwco-webp.webp';

const FirstSection = () => {
  return (
    <>
      <section className="bg-fundo-1 dark:bg-fundo-0">
        <CustomContainer>
          <div className="grid grid-cols-[1fr,2fr] gap-6">
            <div className="py-9 max-w-[360px] ">
              <img className="rounded-3xl" src={Fotografia} alt="" />
            </div>
            <div className="mx-auto my-auto relative pl-5">
              <div className="absolute block w-32 h-24 bg-center bg-no-repeat top-[-15px] left-[-20px] bg-detalhe" />
              <h1 className="text-fonte-cor-1 dark:text-fonte-cor-1-d font-playfair text-7xl leading-none mb-8 tracking-wide relative">
                <div>Desenvolvimento</div>
                <div>Front End &</div>
                <div>UX/UI Designer</div>
              </h1>
              <p className="text-fonte-cor-2 dark:text-fonte-cor-2-d text-2xl pr-5 flex">
                Localizado em Fortaleza - Ceará
                <span className="relative flex h-3 w-3">
                  <span className="animate-bounce w-6 h-6">&#129680;</span>
                </span>
              </p>
            </div>
          </div>
        </CustomContainer>
      </section>
    </>
  );
};

export default FirstSection;
