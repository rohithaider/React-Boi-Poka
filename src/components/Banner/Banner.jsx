import BannerImg from '../../assets/books.jpg'
export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BannerImg}
          className="max-w-lg rounded-lg shadow-2xl "
        />
        <div>
          <h1 className="text-5xl font-bold">New Books Collection!</h1>
          <p className="py-6">
            Please Check Out Our Newest Arrivals
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
