import ImageModal from "@components/imagemodal";

const Modal = () => {
  return (
    <div className="container">
      <h1>Image Modal Example</h1>
      <ImageModal
        imageUrl="https://via.placeholder.com/300"
        altText="Placeholder Image"
        text="This is an example of an image with text inside a modal."
      />
    </div>
  );
};

export default Modal;
