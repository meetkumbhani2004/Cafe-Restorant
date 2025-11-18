export default function StickyImage() {
  return (
    <div className="relative h-[150vh] bg-black">
      <div className="sticky top-0 h-screen">
        <div className="w-full h-full bg-[url('/bg1.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
}
