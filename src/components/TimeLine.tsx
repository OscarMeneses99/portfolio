function TimeLine() {
  return (
    <section className="p-4">
      <ol className="relative border-s border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8  ring-gray-900 bg-red-500" />
          <div>
            <h3 className="flex items-center mb-1 text-lg font-semibold">
              IPN ESIME Zacatenco
            </h3>
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
