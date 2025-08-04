import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-start p-6 bg-white shadow-lg rounded-lg space-y-4 md:space-y-0 md:space-x-8">
      {/* Profile Image */}
      <div className="flex-shrink-0">

        <Image
          src="/images/profile.jfif"
          alt="Profile"
          width={180}
          height={38}
          priority
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Frot End Developer
        </h1>
        <p className="mt-4 text-gray-600">
          I’m seeking to a passion to know and learn more, to find a place where I can apply my knowledge, work on many projects and gain more knowledge and experience in working, find new challenge to develop my experience.
          I have about 6 years experience in react.
        </p>
        <div className="flex space-x-4 mt-4">
          {/* Social Icons */}
          <a href="https://www.linkedin.com/in/alaa-shaher/" className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
              <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
          </a>

        </div>
      </div>
    </div>

  );
}
