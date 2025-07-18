import Login from "@/components/Login";

export default function Home() {
  return (
   <>
    <main className='hero'>
      <div className='hero-img'>
        <img alt='hero image' src='hero-img.jpeg' style={{ height: 150, width: 175}} />
      </div>
      <div className='hero-login'>
        <Login />
      </div>
    </main>
   
   </>
  );
}
