export interface ISection {
  onClick: () => void;
}

export default function Section({ onClick }: ISection) {
  return (
    <section className="py-20">
      <main className="text-center">
        <h1 className="font-prata font-normal text-4xl text-purple">
          Minha Organização:
        </h1>
        <div className="bg-purple w-12 h-1 m-auto mt-4"></div>
      </main>

      <div className="flex place-content-end">
        <button
          className="animate-bounce rounded-full bg-purple mr-36 lg:-mt-14"
          onClick={onClick}
        >
          <img src="./imagens/buttonplus.svg" className="w-20" />
        </button>
      </div>
    </section>
  );
}
