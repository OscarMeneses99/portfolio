function TimeLine() {
  return (
    <section className="p-4">
      <h1 className="text-4xl font-bold experience text-center mt-5 mb-5">
        Experience
      </h1>
      <ol className="relative border-s border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8  ring-gray-900 bg-yellow-600" />
          <div>
            <h1 className="flex items-center mb-1 text-lg font-semibold">
              S&P Solutions
            </h1>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              February 2024 - Present
            </time>
            <p className="mb-4 text-base font-normal text-gray-400">
              Web Developer Trainee
            </p>
            <p className="mb-4 text-base font-normal text-gray-400">
              As a Frontend Developer Trainee at SPS, my main role will be to
              integrate services into existing web applications while becoming
              familiar with our development environment and coding practices. I
              work closely with the senior team to understand project
              requirements and contribute to the implementation of new features.
              <br />
              <br />
              Additionally, I will be responsible for conducting end-to-end
              testing to ensure the quality and proper functioning of the
              applications.
              <br />
              <br />
              This position will provide me with an invaluable opportunity to
              gain practical experience and develop my technical skills as I
              immerse myself in the professional world of frontend development.
            </p>
          </div>
        </li>
        <h1 className="text-4xl font-bold education text-center mt-5 mb-5">
          Education
        </h1>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8  ring-gray-900 bg-red-500" />
          <div>
            <h1 className="flex items-center mb-1 text-lg font-semibold">
              IPN ESIME Zacatenco
            </h1>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              August 2018 - 2023
            </time>
            <p className="mb-4 text-base font-normal text-gray-400">
              Electronic and Communications Engineering
            </p>
            <p className="mb-4 text-base font-normal text-gray-400">
              I earned a degree in Communications and Electronics Engineering,
              with a specialty in computing. Proficient in C++ and C#, I&apos;ve
              honed my skills in algorithm design and system architecture. My
              academic career equipped me with problem-solving abilities and
              effective collaboration in diverse teams.
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}

export default TimeLine;
