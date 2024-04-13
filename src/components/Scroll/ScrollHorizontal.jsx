import CustomContainer from '../CustomContainer';
import './ScrollHorizontal.css';

const ScrollHorizontal = () => {
  const items = [
    'html',
    'css',
    'JavaScript',
    'Figma',
    'JQuery',
    'Git',
    'Bootstrap',
    'VSCode',
    'Markdown',
    'Vite',
    'Tailwind',
    'Next',
  ];

  return (
    <div className="pt-6 pb-14 bg-fundo-1 dark:bg-fundo-0 max-[500px]:hidden">
      <CustomContainer>
        <div
          className="flex justify-center items-center flex-col mx-30 max-w-[1000px] mx-auto"
          aria-hidden="true"
        >
          <div
            className="scroll relative flex overflow-hidden w-full"
            style={{ '--t': '50s' }}
          >
            <div>
              {items.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex uppercase tracking-wider m-2 bg-gray-800 text-white rounded px-2 py-1 transform transition-transform duration-500 hover:bg-primeira cursor-pointer"
                >
                  {item}
                </span>
              ))}
              <span className="inline-flex uppercase tracking-wider m-2 text-white rounded px-2 py-1 transform transition-transform duration-500 cursor-pointer bg-primeira ">
                Front-end
              </span>
            </div>
            <div>
              {items.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex uppercase tracking-wider m-2 bg-gray-800 text-white rounded px-2 py-1 transform transition-transform duration-500 hover:bg-primeira cursor-pointer"
                >
                  {item}
                </span>
              ))}
              <span className="inline-flex uppercase tracking-wider m-2 text-white rounded px-2 py-1 transform transition-transform duration-500 cursor-pointer bg-primeira ">
                Front-end
              </span>
            </div>
          </div>
          <div
            className="scroll relative flex overflow-hidden w-full reverso"
            style={{ '--t': '40s' }}
          >
            <div>
              <span className="inline-flex uppercase tracking-wider m-2 text-white rounded px-2 py-1 transform transition-transform duration-500 cursor-pointer bg-primeira ">
                @adriwco
              </span>
              {items.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex uppercase tracking-wider m-2 bg-gray-800 text-white rounded px-2 py-1 transform transition-transform duration-500 hover:bg-primeira cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
            <div>
              <span className="inline-flex uppercase tracking-wider m-2 text-white rounded px-2 py-1 transform transition-transform duration-500 cursor-pointer bg-primeira ">
                @adriwco
              </span>
              {items.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex uppercase tracking-wider m-2 bg-gray-800 text-white rounded px-2 py-1 transform transition-transform duration-500 hover:bg-primeira cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div
            className="scroll relative flex overflow-hidden w-full"
            style={{ '--t': '40s' }}
          >
            <div>
              {items.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex uppercase tracking-wider m-2 bg-gray-800 text-white rounded px-2 py-1 transform transition-transform duration-500 hover:bg-primeira cursor-pointer"
                >
                  {item}
                </span>
              ))}
              <span className="inline-flex uppercase tracking-wider m-2 text-white rounded px-2 py-1 transform transition-transform duration-500 cursor-pointer bg-primeira ">
                Front-end
              </span>
            </div>
            <div>
              {items.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex uppercase tracking-wider m-2 bg-gray-800 text-white rounded px-2 py-1 transform transition-transform duration-500 hover:bg-primeira cursor-pointer"
                >
                  {item}
                </span>
              ))}
              <span className="inline-flex uppercase tracking-wider m-2 text-white rounded px-2 py-1 transform transition-transform duration-500 cursor-pointer bg-primeira ">
                Front-end
              </span>
            </div>
          </div>
          <div
            className="scroll relative flex overflow-hidden w-full reverso"
            style={{ '--t': '45s' }}
          >
            <div>
              {items.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex uppercase tracking-wider m-2 bg-gray-800 text-white rounded px-2 py-1 transform transition-transform duration-500 hover:bg-primeira cursor-pointer"
                >
                  {item}
                </span>
              ))}
              <span className="inline-flex uppercase tracking-wider m-2 text-white rounded px-2 py-1 transform transition-transform duration-500 cursor-pointer bg-primeira ">
                Front-end
              </span>
            </div>
            <div>
              {items.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex uppercase tracking-wider m-2 bg-gray-800 text-white rounded px-2 py-1 transform transition-transform duration-500 hover:bg-primeira cursor-pointer"
                >
                  {item}
                </span>
              ))}
              <span className="inline-flex uppercase tracking-wider m-2 text-white rounded px-2 py-1 transform transition-transform duration-500 cursor-pointer bg-primeira ">
                Front-end
              </span>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default ScrollHorizontal;
