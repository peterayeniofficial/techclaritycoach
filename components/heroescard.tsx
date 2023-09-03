import Image from "next/image";
import { heroes } from "data/heroes";
import { images } from "data/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./button.module.css";

const Heroes = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // <Link href={heroe.link} target="_blank"></Link>

  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-12 sm:grid-cols-3 items-center justify-center ">
        {heroes.map(({ ...heroe }, i) => (
          <div className="">
            <div
              className="flex flex-col items-center space-x-4"
              key={heroe.name.split(" ").join("-")}
            >
              <div className="rounded-lg overflow-hidden">
                <Image
                  onClick={openModal}
                  src={heroe.imageURL} // Path to your image
                  alt={heroe.name} // Alt text for your image
                  width={300} // Width of your image
                  height={300} // Height of your image
                  className="object-cover open-modal-button"
                />
              </div>

              {modalOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={closeModal}>
                      &times;
                    </span>
                    <div className=" grid grid-cols-6 items-center ">
                      {images
                        .slice(0, 21)
                        .filter((item) => item.id < 21)
                        .map((item: any) => (
                          <div className="max-w-[100%] m-2">
                            <img src={item.imageURL} alt={item.altText} />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              <style jsx>{`
                .open-modal-button {
                  cursor: pointer;
                  background-color: #0070f3;
                  color: white;
                  border: none;
                  border-radius: 4px;
                  padding: 10px 20px;
          
                  height: 100%;
                }

                .modal {
                  display: flex;
                  flex-direction: row;
                  position: fixed;
                  z-index: 100;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: auto;
                  background-color: rgba(0, 0, 0, 0.7);
                }

                .modal-content {
                  display: flex;
                  flex-direction: column;
                  background-color: #fefefe;
                  margin: 15% auto;
                  padding: 20px;
                  border: 1px solid #888;
                  width: 50%;
                  height: auto;
                  text-align: center;
                }

                .close {
                  color: #aaa;
                  float: right;
                  font-size: 28px;
                  font-weight: bold;
                  cursor: pointer;
                  display: flex;
                  justify-content: end;
                }

                img {
                  max-width: 100%;
                  display: block;
                  object-fit: cover;
                  object-position: center;
                  margin-bottom: 10px;
                }
              `}</style>

              <div className=" m-auto block">
                <div className="my-0 font-medium dark:text-white mb-3">
                  {heroe.name}
                </div>
                <p className="max-w-[350px] w-full text text-clip mx-auto my-0 text-xs dark:text-white mb-2">
                  {heroe.description}
                </p>
                <div className="flex justify-between ">
                  <div className="my-0 font-small dark:text-white mb-3">
                    {heroe.handle}
                  </div>
                  <div>
                    <Link
                      href={heroe.link}
                      target="_blank"
                      className={styles.btn17}
                    >
                      <span className="text-container">
                        <span className="text">connect</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Heroes;
