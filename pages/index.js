import styles from '@/styles/Home.module.css';
import Head from 'next/head';
export default function Home() {
  return (
    <>
    <Head>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600&display=swap" rel="stylesheet"/>
    </Head>
    <div className={styles.gradientDiv}>
      <div className={styles.content}>
      <h1 className={styles.title}>Check your financial health</h1>
        <p className={styles.paragraph}>Use WeathoMeter to get a free report<br />card for your finances - within minutes</p>
        <button className={styles.custombutton}>Get Started</button>
      </div>
      <div className={styles.middlecontainer}>
      <div className={styles.radiocontainer}>
      <div className={styles.squareRadio}>
      <input type="radio" id="one" name="one" value="one" />
      <span>Expected retirement age</span>
    </div>
      <div className={styles.squareRadio}>
      <input type="radio" id="two" name="two" value="two" />
      <span>Identify Mistakes</span>
    </div>
    </div>
    <div className={styles.phonecontainer}>
     <img src="/phonepic.png" alt="Your Image" className={styles.image} />
     </div>
     <div className={styles.radiocontainer}>
      <div className={styles.squareRadio}>
      <input type="radio" id="three" name="three" value="three" />
      <span>Personalised Road Map</span>
    </div>
      <div className={styles.squareRadio}>
      <input type="radio" id="four" name="four" value="four" />
      <span>Tips To Improve</span>
    </div>
    </div>
    </div>
    <div className={styles.wavecontainer}>
  <div className={styles.overlayContent}>
  <div className={styles.itemcontainer}>
  <div className={styles.imageWithText}>
    <img src="/item.png" alt="Your Image" />
    <div className={styles.textAndThreeItem}>
      <h2>How it works</h2>
      <div className={styles.threeitem}>
        <div className={styles.items}>Answer few <br /> questions</div>
        <div className={styles.items}>Register using <br /> phone and OTP</div>
        <div className={styles.items}>Get report and <br /> personal roadmap</div>
      </div>
    </div>
  </div>
</div>
    <button className={styles.custombutton} style={{marginBottom:'10px'}}>Get Started</button>
  </div>
  <img src="/wave.png" alt="Your Image" className={styles.waveimage} />
</div>
    </div>
    </>
  );
}

