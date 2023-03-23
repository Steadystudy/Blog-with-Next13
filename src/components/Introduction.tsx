import Image from 'next/image';
import ProfileImg from '../../public/profile.png';

export default function Introduction() {
  return (
    <section className="flex flex-col items-center">
      <Image className="rounded-full" width={200} height={200} src={ProfileImg} alt="profile" />
      <h1>Hi, I&apos;m MSG</h1>
      <h2>Full-stack engineer - 진</h2>
      <h3>꾸준히 코딩하는 사람</h3>
    </section>
  );
}
