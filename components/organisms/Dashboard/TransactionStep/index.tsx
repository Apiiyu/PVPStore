import StepItem from "../../../molecules/StepItem"

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That<br /> Easy to Win the Game
            </h2>
            <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                <StepItem icon="step1" title="1. Start" firstDescription="Pilih salah satu game" secondDescription="yang ingin kamu top up"/>
                <StepItem icon="step2" title="2. Fill Up" firstDescription="Top up sesuai dengan" secondDescription="nominal yang sudah tersedia"/>
                <StepItem icon="step3" title="3. Be a Winner" firstDescription="Siap digunakan untuk" secondDescription="improve permainan kamu"/>
            </div>
        </div>
    </section>
  )
}
