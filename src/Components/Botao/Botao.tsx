function Botao({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-purple rounded-xl h-20 w-40 text-white font-montserrat font-bold text-xl mt-6 hover:text-turquoise">
      {children}
    </button>
  );
}

export default Botao;
