import './header.sass';

const Header = () => {
    // Afficher la date du jour dans le header
    const currentDate = new Date();
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('fr-FR', options);

  return (
    <header className="header-container bg-white text-black py-3 border-bottom border-dark border-2">
      <h1>CITATION ET ANNIVERSAIRES</h1>
      <h1 id="date" className="mx-5 text-uppercase">{formattedDate}</h1>
    </header>
  );
}

export default Header;
