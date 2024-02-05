import Image from "next/image";

import mongodb from '@/assets/mongodb.jpg'

const Images = () => {
  return (
  <div>
    We will show the image here
    <Image
      src={mongodb}
      width={1400}
      height={1400}
      alt="MongoDB Image"
    />
    </div>
  )
};

export default Images;
