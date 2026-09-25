import { ArrowRight, Check, X } from 'lucide-react'
import { services, type Service } from '../data'

type BookingModalProps = {
  service: Service
  setService: (service: Service) => void
  step: number
  setStep: (step: number) => void
  confirmed: boolean
  setConfirmed: (value: boolean) => void
  onClose: () => void
}

export function BookingModal({ service, setService, step, setStep, confirmed, setConfirmed, onClose }: BookingModalProps) {
  const slots = ['9:00 AM', '10:30 AM', '12:00 PM', '2:30 PM', '4:00 PM', '6:30 PM']

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Book an appointment">
      <div className="booking-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close booking"><X /></button>
        {confirmed ? <Confirmation service={service} onClose={onClose} /> : <>
          <div className="booking-head"><p className="eyebrow">RESERVE YOUR CHAIR</p><h2>Book your<br /><em>next visit.</em></h2><div className="stepper">{['Service', 'Time', 'Details'].map((label, index) => <span className={step >= index + 1 ? 'active' : ''} key={label}><b>0{index + 1}</b>{label}</span>)}</div></div>
          <div className="booking-body">
            {step === 1 && <ServiceStep service={service} setService={setService} onContinue={() => setStep(2)} />}
            {step === 2 && <TimeStep slots={slots} onContinue={() => setStep(3)} />}
            {step === 3 && <DetailsStep onConfirm={() => setConfirmed(true)} />}
          </div>
        </>}
      </div>
    </div>
  )
}

function ServiceStep({ service, setService, onContinue }: { service: Service; setService: (service: Service) => void; onContinue: () => void }) {
  return <><label>Select a service</label><div className="booking-services">{services.map((item) => <button className={item.id === service.id ? 'selected' : ''} key={item.id} onClick={() => setService(item)}><span>{item.name}<small>{item.duration}</small></span><strong>${item.price}</strong></button>)}</div><button className="button button-dark full" onClick={onContinue}>Continue <ArrowRight size={16} /></button></>
}

function TimeStep({ slots, onContinue }: { slots: string[]; onContinue: () => void }) {
  return <><label>Choose a time / Saturday, September 28</label><div className="time-slots">{slots.map((slot) => <button className={slot === '2:30 PM' ? 'selected' : ''} key={slot}>{slot}</button>)}</div><button className="button button-dark full" onClick={onContinue}>Continue <ArrowRight size={16} /></button></>
}

function DetailsStep({ onConfirm }: { onConfirm: () => void }) {
  return <><label>Your details</label><div className="form-grid"><input placeholder="Full name" /><input placeholder="Email address" type="email" /><input placeholder="Phone number" /><textarea placeholder="Anything we should know?" /></div><button className="button button-dark full" onClick={onConfirm}>Confirm appointment <ArrowRight size={16} /></button></>
}

function Confirmation({ service, onClose }: { service: Service; onClose: () => void }) {
  return <div className="confirmation"><div className="confirm-mark"><Check /></div><p className="eyebrow">YOU'RE ALL SET</p><h2>Appointment<br /><em>confirmed.</em></h2><p>Your {service.name.toLowerCase()} is reserved for Saturday, September 28 at 2:30 PM.</p><div className="reference">MANE-82F41</div><button className="button button-dark" onClick={onClose}>Done <Check size={16} /></button></div>
}