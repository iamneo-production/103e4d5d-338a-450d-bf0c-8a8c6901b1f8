const cities = ["adilabad", "nizamabad", "warangal", "karimnagar", "khamman"]

export const cityData: {
  [key: string]: {
    id: number
    name: string
    lat: number
    lon: number
    iframe: React.DetailedHTMLProps<
      React.IframeHTMLAttributes<HTMLIFrameElement>,
      HTMLIFrameElement
    >
  }
} = {
  adilabad: {
    id: 0,
    name: "adilabad",
    lat: 19.6667,
    lon: 78.533302,
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37332.35161329767!2d78.50424171925191!3d19.660416079524488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd25c756be12b11%3A0x5b3bd1283e6840ec!2sAdilabad(U)%2C%20Telangana%20504001!5e1!3m2!1sen!2sin!4v1677756631635!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  nizamabad: {
    id: 1,
    name: "nizamabad",
    lat: 18.672505,
    lon: 78.094087,
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59365.77236689223!2d78.06356149458377!3d18.67779463068762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcddb27a9a89045%3A0x9f38c4351a15bbf2!2sNizamabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1677756769279!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  warangal: {
    id: 2,
    name: "warangal",
    lat: 18,
    lon: 79.58333,
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90831.38905728584!2d79.55456482541874!3d17.94917187187179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33450bd75e4be7%3A0x9306909c277bc137!2sWarangal%2C%20Telangana!5e1!3m2!1sen!2sin!4v1677756813400!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  karimnagar: {
    id: 3,
    name: "karimnagar",
    lat: 18.438555,
    lon: 79.128838,
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59492.196574125!2d79.11704829045965!3d18.429091255826144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd910bcf48931%3A0x4889b0398ed69f07!2sKarimnagar%2C%20Telangana!5e1!3m2!1sen!2sin!4v1677756855738!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  khamman: {
    id: 4,
    name: "khamman",
    lat: 17.247253,
    lon: 80.151443,
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59854.87599144305!2d80.11541535689524!3d17.248352219381246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3459d0d5cf738d%3A0xe18da4ae6d89da01!2sKhammam%2C%20Telangana!5e1!3m2!1sen!2sin!4v1677756883990!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
}

export default cities
