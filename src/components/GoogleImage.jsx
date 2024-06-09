import Image from "next/image";

const GoogleImage = () => {
  return (
    <Image
      className="flex justify-center items-center"
      src="https://static-00.iconduck.com/assets.00/google-icon-2048x673-w3o7skkh.png"
      width={300}
      height={100}
      alt="Google image"
    />
  );
};

export default GoogleImage;
