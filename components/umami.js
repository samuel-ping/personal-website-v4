import Script from 'next/script';

export default function Umami() {
  return (
    <>
      <Script
        defer={true}
        src="https://stats.samuelp.ing/script.js"
        data-website-id="a15923c0-b869-448c-885b-da0861e7f0b1"
        data-domains="v4.samuelp.ing"
      />
    </>
  );
}
