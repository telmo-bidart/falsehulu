import Image from "next/image";

function Header () {
    return (
      <header>
          <h1>
              this is the header
          </h1>
          <Image src='https://links.papareact.com/ua6' widht={200} height={100} alt='logo' />
      </header>
    )
}

export default Header
