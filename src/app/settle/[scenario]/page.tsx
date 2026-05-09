import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const dynamic = "force-static";

const BASE = "https://instantverdict.com";

interface ScenarioData {
  title: string;
  desc: string;
  h1: string;
  sub: string;
  emoji: string;
  category: string;
  intro: string;
  sides: { label: string; arg: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
}

const SCENARIOS: Record<string, ScenarioData> = {
  "landlord-wont-return-deposit": {
    emoji: "🏠",
    category: "Housing",
    title: "Landlord Won't Return My Deposit — Who's Right? | InstantVerdict",
    desc: "Landlord keeping your security deposit? Find out if you're legally entitled to it back. AI verdict based on your jurisdiction's tenancy law. Free.",
    h1: "Landlord Won't Return My Deposit — Am I Right?",
    sub: "Deposit disputes are the most common landlord-tenant conflict. Find out exactly where you stand.",
    intro: "Security deposit disputes affect millions of renters every year. Most jurisdictions have strict rules: landlords must return deposits within a set number of days (14–45 depending on country/state) with a written itemised list of any deductions. Unlawful withholding often entitles tenants to double or triple the deposit amount as damages.",
    sides: [
      { label: "Tenant", arg: "Landlord has kept my full deposit without providing any itemised breakdown. I left the property in good condition." },
      { label: "Landlord", arg: "There was significant damage to the property beyond fair wear and tear that justifies retaining the deposit." },
    ],
    faqs: [
      { q: "How long does my landlord have to return my deposit?", a: "It depends on your jurisdiction: 14 days in Hawaii, Montana, and parts of Australia; 21 days in California and Washington; 30 days in most US states; 45 days in Indiana and Virginia; 10 working days in the UK (from the tenancy end date for TDS disputes)." },
      { q: "What is 'fair wear and tear'?", a: "Fair wear and tear is the natural deterioration of a property through normal use. Landlords cannot charge for this. Examples: carpet thinning over years, small nail holes, faded paint. Examples NOT covered: burns, stains, broken fixtures, pet damage." },
      { q: "What if my landlord misses the deadline?", a: "In most jurisdictions, missing the return deadline means the landlord forfeits their right to make any deductions and may owe you additional damages — sometimes double or triple the deposit." },
      { q: "Do I need to provide a forwarding address?", a: "In some jurisdictions (Texas, New Jersey) the return deadline doesn't start until you provide a forwarding address in writing. Always send your new address via email or letter." },
    ],
    related: ["landlord-entered-without-notice", "landlord-wont-fix-repairs", "eviction-notice"],
  },
  "fired-without-notice": {
    emoji: "💼",
    category: "Employment",
    title: "Fired Without Notice — Is This Legal? | InstantVerdict",
    desc: "Dismissed without notice or pay? Find out if your employer broke the law. AI verdict based on your country's employment law. Free, instant.",
    h1: "Fired Without Notice — Was It Legal?",
    sub: "Being let go without notice is traumatic. Find out if your employer followed the law.",
    intro: "Notice periods are a fundamental employment right in most countries. In the UK and Australia, statutory minimum notice applies based on length of service. In the US, at-will employment generally allows termination without notice — but exceptions apply for discrimination, retaliation, contract violations, and implied promises. Most countries require at least 1-4 weeks notice.",
    sides: [
      { label: "Employee", arg: "I was dismissed immediately with no notice period and no pay in lieu of notice. I had worked there for 2 years." },
      { label: "Employer", arg: "The employee's conduct justified summary dismissal without notice under the gross misconduct exception." },
    ],
    faqs: [
      { q: "Can my employer fire me without notice in the UK?", a: "Only for gross misconduct. Otherwise, UK employees are entitled to statutory minimum notice: 1 week per year of service (up to 12 weeks). Your contract may provide more." },
      { q: "Can my employer fire me without notice in the US?", a: "In most US states, at-will employment means yes — unless you have an employment contract, are covered by a collective agreement, or the termination was discriminatory or retaliatory." },
      { q: "What is pay in lieu of notice (PILON)?", a: "Many employers terminate immediately but pay the notice period as a lump sum. This is legal if your contract or jurisdiction allows it. You're still entitled to the money." },
      { q: "What counts as gross misconduct?", a: "Typically: theft, violence, serious safety violations, fraud, or deliberate damage to the business. Minor performance issues and honest mistakes do NOT constitute gross misconduct." },
    ],
    related: ["unfair-dismissal", "employer-not-paying-wages", "workplace-harassment"],
  },
  "noise-complaint-neighbour": {
    emoji: "🔊",
    category: "Neighbours",
    title: "Neighbour Noise Complaint — Who's Right? | InstantVerdict",
    desc: "Noisy neighbour keeping you up? Find out your legal rights and what action you can take. AI verdict based on local nuisance law. Free.",
    h1: "Neighbour Noise Dispute — Am I Right to Complain?",
    sub: "Everyone deserves quiet enjoyment of their home. Find out what the law says about your neighbour's noise.",
    intro: "Noise nuisance is one of the most common neighbour disputes globally. Most jurisdictions have statutory noise nuisance provisions, council enforcement powers, and civil remedies. The threshold varies: late-night music, barking dogs, and construction outside permitted hours are typically actionable. The question is whether the noise is 'unreasonable' — judged objectively.",
    sides: [
      { label: "Complainant", arg: "My neighbour plays loud music until 2-3am multiple nights per week. I've asked them to stop and they've refused." },
      { label: "Neighbour", arg: "I occasionally have people over and the music is not excessively loud. The complainant is oversensitive." },
    ],
    faqs: [
      { q: "What qualifies as a statutory noise nuisance?", a: "A noise that unreasonably interferes with the use and enjoyment of property, or is prejudicial to health. This is judged objectively — not just whether one person finds it annoying. Regular late-night music typically qualifies." },
      { q: "What can local councils / authorities do?", a: "Most councils can issue abatement notices requiring the noise to stop. Continued breaches can lead to fines or court orders. In the UK, councils must investigate complaints under the Environmental Protection Act 1990." },
      { q: "What hours are legally 'quiet hours'?", a: "Varies by jurisdiction. In most UK councils: 11pm–7am. In many Australian states: 10pm–7am weekdays, 10pm–8am weekends. In the US: most cities set quiet hours 10pm–7am or 11pm–7am." },
      { q: "Can I take civil action for noise nuisance?", a: "Yes — private nuisance claims are available in most common law jurisdictions. However, council enforcement is usually faster and cheaper as a first step." },
    ],
    related: ["boundary-dispute", "neighbour-parking-dispute", "hoa-fine-dispute"],
  },
  "employer-not-paying-overtime": {
    emoji: "💰",
    category: "Employment",
    title: "Employer Not Paying My Overtime — Am I Owed Money? | InstantVerdict",
    desc: "Employer refusing to pay overtime? Find out what you're owed. AI verdict based on FLSA, Fair Work Act, or your country's wage law. Free.",
    h1: "Employer Not Paying Overtime — What Are My Rights?",
    sub: "Overtime pay is a legal right in most countries. Find out exactly what your employer owes you.",
    intro: "Overtime wage theft is one of the most common employment violations. In the US, the Fair Labor Standards Act (FLSA) requires 1.5x pay for hours over 40 per week for eligible employees. In the UK, all hours must be paid at least minimum wage but there's no statutory overtime rate unless in your contract. Australia's award system often includes overtime penalties.",
    sides: [
      { label: "Employee", arg: "I regularly work 50+ hours per week but my employer pays me a flat salary and refuses to pay overtime rates." },
      { label: "Employer", arg: "The employee is salaried and in a managerial role that is exempt from overtime requirements." },
    ],
    faqs: [
      { q: "Am I entitled to overtime pay in the US?", a: "Under the FLSA, non-exempt employees must receive 1.5x their regular rate for hours over 40 per week. 'Exempt' status requires meeting specific salary and duties tests — many employers misclassify employees as exempt." },
      { q: "What is the overtime rate in Australia?", a: "Under most Modern Awards, overtime rates are 1.5x for the first 2-3 hours over ordinary hours, then 2x (double time). Award-free employees follow the National Employment Standards and their contracts." },
      { q: "Does the UK require overtime pay?", a: "UK law doesn't set a statutory overtime rate, but all hours must be paid at least minimum wage. If your total hours take your average pay below minimum wage, the employer is breaking the law." },
      { q: "How far back can I claim unpaid overtime?", a: "US: 2 years (3 for wilful violations) under FLSA. UK: up to 2 years for unlawful deductions from wages. Australia: 6 years under the Fair Work Act. Some states extend these limits." },
    ],
    related: ["employer-not-paying-wages", "fired-without-notice", "workplace-harassment"],
  },
  "online-purchase-scam": {
    emoji: "🛒",
    category: "Consumer",
    title: "Online Purchase Scam — Am I Entitled to a Refund? | InstantVerdict",
    desc: "Scammed online or received something different from what you ordered? Get an AI verdict on your consumer rights. Free, instant.",
    h1: "Online Purchase Gone Wrong — What Are My Rights?",
    sub: "You ordered something online. What arrived (or didn't arrive) is not what you paid for. Here's what the law says.",
    intro: "Consumer protection laws apply fully to online purchases. Under UK Consumer Rights Act, Australian Consumer Law, and US state consumer protection statutes, goods must match their description, be of acceptable quality, and be fit for purpose. Distance selling regulations also give consumers a statutory right to cancel in most jurisdictions.",
    sides: [
      { label: "Buyer", arg: "I ordered a product online. What arrived was a cheap substitute completely different from what was advertised. The seller is ignoring my refund requests." },
      { label: "Seller", arg: "The item was described accurately. The buyer's expectations were unreasonable and return policy doesn't cover this situation." },
    ],
    faqs: [
      { q: "What is my right to cancel an online purchase in the UK?", a: "The Consumer Contracts Regulations 2013 give you 14 days to cancel most online purchases after delivery, with no reason needed. You then have another 14 days to return the goods." },
      { q: "What does 'not as described' mean legally?", a: "If goods don't match their written or visual description, you're entitled to reject them for a full refund in most jurisdictions. This applies to products materially different from listing photos or descriptions." },
      { q: "What if the seller is overseas?", a: "Your rights depend on where the seller is based and which law applies. For UK and EU sellers, strong consumer protections apply. For sellers in countries without treaties, your credit card or PayPal may be your best route." },
      { q: "Can I do a credit card chargeback?", a: "Yes — credit card chargebacks (Section 75 in UK, dispute processes elsewhere) are often faster than consumer complaints for purchases over £100/comparable amounts." },
    ],
    related: ["company-refusing-refund", "freelancer-not-paid", "defamation-online"],
  },
  "who-pays-car-accident": {
    emoji: "🚗",
    category: "Money",
    title: "Car Accident — Who Is Liable and Who Pays? | InstantVerdict",
    desc: "Car accident dispute? Who was at fault and who pays? AI verdict applying traffic law and liability principles to your situation. Free.",
    h1: "Car Accident — Who Is Liable?",
    sub: "Fault determines everything in a car accident. Get an objective verdict on who was responsible.",
    intro: "Car accident liability is determined by negligence — who failed to exercise reasonable care on the road. Common fault indicators include: failing to give way, rear-ending (usually the following driver's fault), running red lights, unsafe lane changes, and failure to observe road conditions. Insurance companies use the same legal principles.",
    sides: [
      { label: "Driver A", arg: "The other driver ran a red light and hit my vehicle. I had right of way and was driving within the speed limit." },
      { label: "Driver B", arg: "The light was amber, not red, when I passed through. Driver A should have anticipated this at an intersection." },
    ],
    faqs: [
      { q: "Is the rear driver always at fault in a rear-end collision?", a: "Usually, but not always. The rear driver has a duty to maintain a safe following distance, so they're typically at fault. However, if the front driver brake-checked suddenly or cut in, fault can be shared." },
      { q: "What is contributory vs comparative negligence?", a: "In contributory negligence states (UK, some US states), any fault on your part can bar recovery. In comparative negligence states (most US states, Australia), your damages are reduced by your percentage of fault." },
      { q: "What if the other driver has no insurance?", a: "Most countries require insurers to have uninsured motorist coverage. In the UK, the Motor Insurers' Bureau (MIB) can compensate victims of uninsured drivers." },
      { q: "Does a police report determine fault legally?", a: "Police reports are evidence but not binding on insurance companies or courts. They note what happened and may assign fault, but insurers conduct their own investigation." },
    ],
    related: ["friend-owes-me-money", "who-pays-for-damage", "landlord-wont-return-deposit"],
  },
  "boundary-dispute": {
    emoji: "📏",
    category: "Neighbours",
    title: "Property Boundary Dispute — Who Owns the Land? | InstantVerdict",
    desc: "Neighbour encroaching on your land? Fence in the wrong place? Get an AI verdict on your boundary rights. Free, instant.",
    h1: "Property Boundary Dispute — Who Is Right?",
    sub: "Where your land ends and your neighbour's begins is a legal question — not a guessing game.",
    intro: "Boundary disputes are among the most contentious and costly neighbour conflicts. They typically involve the position of fences, walls, hedges, or structures. The legal boundary is determined by title deeds, Land Registry documents (UK), Torrens Title (Australia), or recorded surveys (US). Actual physical boundaries may differ from legal ones.",
    sides: [
      { label: "Owner A", arg: "My neighbour has moved the fence 40cm onto my land during repairs. The original boundary is clearly shown in my title deeds." },
      { label: "Owner B", arg: "The fence was replaced in its original position. The title deed measurements are approximate and don't reflect the actual historic boundary." },
    ],
    faqs: [
      { q: "How is a legal boundary determined?", a: "By the title deeds, filed plans with the Land Registry (UK), county recorder (US), or Torrens Title system (Australia). A surveyor can plot the legal boundary against the physical features on the ground." },
      { q: "Who owns the fence between properties?", a: "Varies by jurisdiction and property-specific rules. In England, the 'T marks' on title plans indicate which owner is responsible for each boundary feature. Without specific indication, it may be shared or unclear." },
      { q: "What is adverse possession (squatters' rights)?", a: "If someone occupies land openly, continuously, and without permission for a set period (10-12 years in England, 10 years in Scotland, 10-20 years in US states), they may acquire title. This can apply to boundary encroachments." },
      { q: "Should I try mediation first?", a: "Yes — boundary disputes in court are extremely expensive. Mediation through a professional mediator is far cheaper and often more effective. Getting an AI verdict first helps you assess your position." },
    ],
    related: ["noise-complaint-neighbour", "neighbour-parking-dispute", "hoa-fine-dispute"],
  },
  "inheritance-dispute": {
    emoji: "📜",
    category: "Family",
    title: "Inheritance Dispute — Who Is Legally Entitled? | InstantVerdict",
    desc: "Inheritance conflict? Will being contested? Find out who's legally entitled under succession law. AI verdict, free, instant.",
    h1: "Inheritance Dispute — Who Has the Legal Right?",
    sub: "Money and family are a combustible combination. Get an impartial ruling on who's legally entitled.",
    intro: "Inheritance disputes involve contested wills, claims against estates, and family provision applications. A valid will generally determines distribution, but wills can be challenged on grounds of lack of testamentary capacity, undue influence, or fraud. In many jurisdictions, certain family members can claim 'family provision' from an estate regardless of the will's terms.",
    sides: [
      { label: "Claimant", arg: "My parent's will was changed shortly before their death when they were cognitively impaired. The change disproportionately benefits one sibling who had influence over them." },
      { label: "Beneficiary", arg: "The will was executed properly with solicitors present. Our parent was of sound mind and had the right to leave their estate as they chose." },
    ],
    faqs: [
      { q: "Can a will be challenged?", a: "Yes — on grounds of: lack of testamentary capacity (the person wasn't of sound mind), undue influence (coercion by a beneficiary), fraud, improper execution, or that the will doesn't reflect the deceased's true intentions." },
      { q: "What is a family provision claim?", a: "In Australia, New Zealand, UK (Inheritance Act 1975), and some other jurisdictions, certain close family members can apply to court for a share of the estate even if excluded from or inadequately provided for in the will." },
      { q: "How do you prove lack of testamentary capacity?", a: "The person must have understood: (1) what a will is and its effect, (2) the nature and extent of their estate, (3) who the natural beneficiaries are, and (4) not be suffering a mental disorder affecting these. Medical records and witness testimony are key evidence." },
      { q: "What is the time limit for contesting a will?", a: "Varies by jurisdiction. UK Inheritance Act claims: 6 months from grant of probate. Australian family provision: 12 months from death (varies by state). US: typically 3-5 years from probate filing, depending on the state." },
    ],
    related: ["friend-owes-me-money", "who-pays-for-damage", "landlord-wont-return-deposit"],
  },
  "friend-owes-me-money": {
    emoji: "💸",
    category: "Money",
    title: "Friend Owes Me Money and Won't Pay — Am I Right? | InstantVerdict",
    desc: "Friend borrowed money and won't pay back? Get an AI verdict on your legal rights to recover the debt. Free, instant.",
    h1: "Friend Owes Me Money — What Are My Legal Rights?",
    sub: "Mixing money and friendship gets messy. Get a clear verdict on who's legally in the right.",
    intro: "Personal loans between friends and family are enforceable contracts in most jurisdictions — even without a written agreement. The key elements are: an agreement to lend, a promise to repay, and consideration (the loan itself). Verbal contracts can be sufficient, though harder to prove. Small claims courts are specifically designed for these disputes.",
    sides: [
      { label: "Lender", arg: "I lent my friend £500 six months ago. They agreed to pay it back within two months. They're now ignoring my messages." },
      { label: "Borrower", arg: "This was a gift, not a loan. There was never a clear agreement about repayment terms." },
    ],
    faqs: [
      { q: "Is a verbal loan agreement legally enforceable?", a: "Yes in most jurisdictions — verbal contracts are generally binding. The challenge is proving the agreement existed. Evidence like bank transfers (with notes), text messages, and witness accounts can all help." },
      { q: "How do I prove I lent money without a written agreement?", a: "Bank transfer records showing the payment, text/WhatsApp messages discussing the loan, emails, and witness statements all constitute evidence. Even partial repayments can prove the loan existed." },
      { q: "Is small claims court worth it for personal loans?", a: "For amounts up to £10,000 (UK), $10,000-$25,000 (US states vary), or similar limits, small claims court is cost-effective, fast, and doesn't require a lawyer." },
      { q: "Can the 'gift not a loan' defence succeed?", a: "It can — if there's no evidence of an agreed repayment obligation. Get an AI verdict to assess the strength of both sides before deciding whether to escalate." },
    ],
    related: ["roommate-owes-rent", "who-pays-for-damage", "business-partner-dispute"],
  },
  "landlord-entered-without-notice": {
    emoji: "🚪",
    category: "Housing",
    title: "Landlord Entered My Home Without Notice — Is That Legal? | InstantVerdict",
    desc: "Landlord let themselves in without warning? Know your right to quiet enjoyment. AI verdict based on your tenancy law. Free.",
    h1: "Landlord Entered Without Notice — What Are My Rights?",
    sub: "Your home is your castle — even when you're renting. Find out if your landlord broke the law.",
    intro: "Tenants have a fundamental right to quiet enjoyment of their rental property. In virtually every jurisdiction, landlords must give advance notice before entering — typically 24-48 hours. Exceptions exist only for genuine emergencies (fire, flood, gas leak). Entering without notice is a serious breach that can entitle tenants to damages, rent reduction, or lease termination.",
    sides: [
      { label: "Tenant", arg: "My landlord let themselves into my flat twice without giving any notice. They have a key and just came in while I was at work." },
      { label: "Landlord", arg: "I needed to inspect the property for maintenance reasons. I did attempt to contact the tenant beforehand." },
    ],
    faqs: [
      { q: "How much notice must a landlord give before entering?", a: "24 hours minimum in most US states, UK (except emergencies), and Australian states. Some jurisdictions require 48 hours (California requires 24 hours written notice). Notice must be in writing in many places." },
      { q: "When can a landlord enter without notice?", a: "Only genuine emergencies: fire, flooding, gas leak, or imminent danger. A routine inspection, showing the property to prospective tenants, or checking on repairs is NOT an emergency." },
      { q: "What can I do if my landlord keeps entering without notice?", a: "Document every instance. Send a formal written warning citing the specific law. File a complaint with the housing tribunal/ombudsman. In serious cases, you may be able to apply for an injunction or terminate the tenancy and claim damages." },
      { q: "Can I change the locks?", a: "Generally not without landlord permission — it could breach your lease. A better approach is to formally notify the landlord of their obligations and escalate to a tribunal if they continue." },
    ],
    related: ["landlord-wont-return-deposit", "landlord-wont-fix-repairs", "eviction-notice"],
  },
  "workplace-harassment": {
    emoji: "⚠️",
    category: "Employment",
    title: "Workplace Harassment — Is This Legal? What Are My Rights? | InstantVerdict",
    desc: "Being harassed at work? Find out if it crosses the legal threshold and what your options are. AI verdict based on employment law. Free.",
    h1: "Workplace Harassment — Do I Have a Legal Claim?",
    sub: "Not all workplace rudeness is illegal. But some of it is. Find out where your situation falls.",
    intro: "Workplace harassment becomes legally actionable when it's based on a protected characteristic (race, sex, religion, age, disability, sexual orientation, etc.) OR when it creates a hostile work environment. Bullying alone isn't always illegal in most countries — but harassment linked to protected characteristics is prohibited by discrimination law in almost every jurisdiction.",
    sides: [
      { label: "Employee", arg: "My manager regularly makes derogatory comments about my age and has excluded me from meetings since I turned 50. This is affecting my career progression." },
      { label: "Employer", arg: "Any exclusion from meetings was based on role relevance. Age played no part in management decisions." },
    ],
    faqs: [
      { q: "What is the legal definition of workplace harassment?", a: "In most jurisdictions, illegal harassment is: (1) unwanted conduct related to a protected characteristic, (2) that has the purpose or effect of violating dignity, or (3) creates an intimidating, hostile, or degrading environment." },
      { q: "What should I do first if I'm being harassed?", a: "Document everything: dates, what was said, witnesses. Report formally through HR. This creates a paper trail. Many discrimination claims fail because there's no documented complaint — start the formal process early." },
      { q: "What if HR does nothing?", a: "Escalate to the EEOC (US), Employment Tribunal (UK), Fair Work Commission (Australia), or your equivalent national body. Filing with the external regulator often prompts employers to act." },
      { q: "Is workplace bullying illegal even without a protected characteristic?", a: "Not automatically. In Australia, repeated unreasonable management behaviour can be 'bullying' under the Fair Work Act. In the UK, general bullying is not illegal but harassment based on protected characteristics is. In the US, only federally protected-class harassment is illegal." },
    ],
    related: ["fired-without-notice", "unfair-dismissal", "employer-not-paying-wages"],
  },
  "landlord-wont-fix-repairs": {
    emoji: "🔧",
    category: "Housing",
    title: "Landlord Won't Fix Repairs — What Are My Rights? | InstantVerdict",
    desc: "Landlord refusing to fix broken heating, plumbing or structural issues? Know your legal rights to habitable housing. Free AI verdict.",
    h1: "Landlord Refusing to Fix Repairs — Am I Right?",
    sub: "Every tenant has the right to a habitable home. Find out if your landlord is breaking the law.",
    intro: "Landlords have a legal obligation to maintain rental properties in a habitable condition. This covers structural integrity, heating, plumbing, hot water, and pest control. In the UK, the Homes (Fitness for Human Habitation) Act 2018 strengthened these obligations. In the US, the 'implied warranty of habitability' applies in almost every state. Failure to repair allows tenants to withhold rent, repair and deduct, or terminate the lease in many jurisdictions.",
    sides: [
      { label: "Tenant", arg: "The central heating has been broken for 3 weeks. It's winter. I've notified my landlord twice in writing and they haven't arranged repairs." },
      { label: "Landlord", arg: "We are waiting for a part to arrive. The delay is due to supply chain issues beyond our control." },
    ],
    faqs: [
      { q: "What repairs is my landlord legally responsible for?", a: "Structure and exterior (roof, walls, windows), heating and hot water systems, gas and electricity installations, sanitation (drains, toilets, sinks), and anything that affects health or safety." },
      { q: "Can I withhold rent if repairs aren't done?", a: "In some jurisdictions (California 'rent withholding', Australia 'rent reduction'), yes — but only following strict notice procedures. Doing so incorrectly can give the landlord grounds to evict you. Always get legal advice first." },
      { q: "What is 'repair and deduct'?", a: "Some jurisdictions (e.g., California) allow tenants to arrange emergency repairs themselves and deduct the cost from rent, after the landlord has been given reasonable time to act. Rules vary significantly by location." },
      { q: "How do I formally notify my landlord about repairs?", a: "Always notify in writing (email or letter) with a date. This starts the reasonable repair timeframe and creates evidence. Multiple written notices significantly strengthen any subsequent legal claim." },
    ],
    related: ["landlord-wont-return-deposit", "landlord-entered-without-notice", "eviction-notice"],
  },
  "hoa-fine-dispute": {
    emoji: "🏘️",
    category: "Neighbours",
    title: "HOA Fine Dispute — Can They Really Fine Me? | InstantVerdict",
    desc: "HOA imposing unreasonable fines? Find out if the fine is legally valid. AI verdict based on HOA law and your CC&Rs. Free.",
    h1: "HOA Fine Dispute — Is the Fine Legal?",
    sub: "HOA fines are only valid if the association followed its own rules. Find out if yours did.",
    intro: "Homeowner Association fines are only enforceable if: (1) the violation is clearly prohibited in the CC&Rs or bylaws, (2) proper written notice was provided before fining, (3) the homeowner was given a hearing opportunity, and (4) the fine amount complies with the HOA's schedule and state law caps. Many HOA fines are procedurally invalid.",
    sides: [
      { label: "Homeowner", arg: "The HOA fined me $500 for parking in my own driveway. The CC&Rs only restrict street parking. I was given no warning before the fine." },
      { label: "HOA", arg: "The restriction on vehicle types parked at the property is in the rules. Proper notice was given through the monthly newsletter." },
    ],
    faqs: [
      { q: "Can an HOA fine me without prior warning?", a: "In most US states, HOAs must provide a written violation notice before imposing a fine, and give the homeowner a reasonable opportunity to cure the violation (typically 30 days). Skipping this process invalidates the fine." },
      { q: "What is the maximum an HOA can fine?", a: "Varies by state. Many states cap daily fines at $100-$200 and total fines for a single violation. Some states require fines to be 'reasonable'. Check your state's HOA statute." },
      { q: "Can I challenge an HOA fine?", a: "Yes — most HOA laws require a hearing process. Request a formal hearing in writing. At the hearing, challenge procedural failures (no notice, no prior warning, wrong violation category)." },
      { q: "What if the HOA is acting selectively?", a: "Selective enforcement — fining some homeowners for violations they ignore for others — is a defence to HOA fines in many states. Document evidence of the inconsistency." },
    ],
    related: ["noise-complaint-neighbour", "boundary-dispute", "neighbour-parking-dispute"],
  },
  "company-refusing-refund": {
    emoji: "🔄",
    category: "Consumer",
    title: "Company Refusing a Refund — Am I Legally Entitled? | InstantVerdict",
    desc: "Business refusing to refund you? Find out your consumer rights. AI verdict based on your country's consumer protection law. Free.",
    h1: "Company Refusing a Refund — What Are My Rights?",
    sub: "Consumer rights aren't optional for businesses. Find out if you're legally entitled to that refund.",
    intro: "Consumer protection laws in most countries give buyers clear rights when goods are faulty, not as described, or services aren't delivered. In the UK (Consumer Rights Act 2015), Australia (Australian Consumer Law), and most US states (state UDAP statutes), businesses cannot simply refuse refunds for qualifying reasons. 'No refund' policies are often illegal.",
    sides: [
      { label: "Customer", arg: "The product I bought stopped working after 3 weeks. It was clearly defective. The company is refusing a refund, saying I must have damaged it." },
      { label: "Business", arg: "Our policy is no refunds after 14 days. The product was working when sold. Any damage is the customer's responsibility." },
    ],
    faqs: [
      { q: "Is a 'no refund' policy legal?", a: "Not for faulty goods. In most countries, consumer protection law overrides store policies. A 'no refund' sign for defective products is unlawful in the UK, Australia, and most US states." },
      { q: "What are my rights for a faulty product in the UK?", a: "Under the Consumer Rights Act 2015: 30 days for a full refund for a faulty product; 6 months for repair or replacement (the business must prove it wasn't faulty on purchase); up to 6 years for breach of contract claims." },
      { q: "What are my rights in Australia for defective goods?", a: "The Australian Consumer Law guarantees consumer guarantees that cannot be excluded. Goods must be of acceptable quality, fit for purpose, and match their description. Remedies include repair, replacement, or refund." },
      { q: "What if the business still refuses?", a: "File a complaint with your country's consumer authority (Trading Standards UK, ACCC Australia, FTC/state AG in US) or take the claim to small claims court. Credit card chargeback is also available in many cases." },
    ],
    related: ["online-purchase-scam", "subscription-cancellation-dispute", "freelancer-not-paid"],
  },
  "unfair-dismissal": {
    emoji: "📋",
    category: "Employment",
    title: "Unfair Dismissal — Do I Have a Claim? | InstantVerdict",
    desc: "Think your dismissal was unfair? Find out if it meets the legal threshold. AI verdict based on employment law in your country. Free.",
    h1: "Unfair Dismissal — Was I Let Go Unfairly?",
    sub: "Being dismissed isn't always unfair. But sometimes it is — and you deserve to know the difference.",
    intro: "Unfair dismissal occurs when an employer terminates employment without fair grounds or without following a fair procedure. In the UK (Employment Rights Act 1996), eligible employees can claim unfair dismissal if the reason for dismissal wasn't one of the five 'fair reasons' (conduct, capability, redundancy, statutory restriction, or some other substantial reason) or if a fair process wasn't followed.",
    sides: [
      { label: "Employee", arg: "I was dismissed for gross misconduct after raising a workplace safety concern. I believe this was retaliation and the misconduct allegation is fabricated." },
      { label: "Employer", arg: "The dismissal followed a fair investigation and disciplinary process. The misconduct was serious and unrelated to any safety concerns." },
    ],
    faqs: [
      { q: "What qualifies as unfair dismissal in the UK?", a: "Dismissal is unfair if: (1) the reason wasn't one of the five fair reasons under the Employment Rights Act, or (2) the employer didn't follow a fair procedure. Automatic unfair dismissal applies if dismissed for whistleblowing, union membership, or pregnancy." },
      { q: "What is the time limit for an unfair dismissal claim?", a: "UK: 3 months minus 1 day from the date of termination. Australia (Fair Work): 21 days from dismissal. US: varies significantly — EEOC charges for discrimination-based dismissal are typically 180-300 days." },
      { q: "What compensation can I receive for unfair dismissal?", a: "UK: Basic award (based on age, service, weekly pay) + compensatory award (up to ~£118,000 or 52 weeks' pay, whichever is lower). Australia: up to 6 months' pay. The amount depends on your losses." },
      { q: "What is automatic unfair dismissal?", a: "Certain dismissal reasons are automatically unfair regardless of the employer's claimed reason: pregnancy/maternity, whistleblowing, union activity, requesting flexible working, asserting statutory rights. No qualifying period of employment needed." },
    ],
    related: ["fired-without-notice", "workplace-harassment", "employer-not-paying-wages"],
  },
  "roommate-owes-rent": {
    emoji: "🏠",
    category: "Money",
    title: "Roommate Owes Rent and Won't Pay — What Are My Rights? | InstantVerdict",
    desc: "Roommate not paying their share of rent? Find out your legal options. AI verdict on your rights. Free, instant.",
    h1: "Roommate Not Paying Rent — Who Is Responsible?",
    sub: "Shared tenancies create shared problems. Find out exactly what your legal position is.",
    intro: "Roommate rent disputes involve two separate legal questions: (1) what each roommate owes the other, and (2) what each owes the landlord. If you're joint tenants, every named tenant is 'jointly and severally liable' for the full rent — meaning the landlord can pursue any one of you for the whole amount if others don't pay. This affects how you can recover from a non-paying roommate.",
    sides: [
      { label: "Paying Roommate", arg: "I've been covering my roommate's share of the rent for 3 months to avoid eviction. They've promised to pay back but haven't." },
      { label: "Non-paying Roommate", arg: "I lost my job unexpectedly and can't afford my share. I'm trying to find work. I don't see why I should be legally pursued." },
    ],
    faqs: [
      { q: "What is joint and several liability in a tenancy?", a: "If you're joint tenants, the landlord can chase any one tenant for the full rent. If you paid your roommate's share to protect your tenancy, you have a legal right to recover that money from them." },
      { q: "Can I recover money I paid for a roommate?", a: "Yes — you have a claim in unjust enrichment or under the terms of any agreement between you. Small claims court is the most practical route for these amounts." },
      { q: "Can I force my roommate to leave?", a: "Only if you're the sole named tenant (they're a subtenant or licensee). If you're joint tenants, you cannot evict them yourself — only the landlord can do that." },
      { q: "What if I want to end my own tenancy?", a: "Joint tenants typically need all tenants to agree to end the tenancy, OR one tenant serves a notice to quit (which in some jurisdictions ends the entire joint tenancy). Check your tenancy agreement and local law." },
    ],
    related: ["friend-owes-me-money", "landlord-wont-return-deposit", "landlord-entered-without-notice"],
  },
  "employer-not-paying-wages": {
    emoji: "💳",
    category: "Employment",
    title: "Employer Not Paying My Wages — What Can I Do? | InstantVerdict",
    desc: "Employer withholding wages or not paying on time? Find out your rights. AI verdict based on wage law in your country. Free.",
    h1: "Employer Not Paying Wages — What Are My Rights?",
    sub: "Wage theft is the most common employment crime. You have strong legal remedies.",
    intro: "Wage theft — failing to pay earned wages on time and in full — is illegal in virtually every country. Remedies include: back wages with interest, liquidated damages (often doubling what you're owed), and attorney fees. The FLSA in the US, the Employment Rights Act in the UK, the National Employment Standards in Australia, and similar legislation in almost every country make unpaid wages an enforceable legal claim.",
    sides: [
      { label: "Employee", arg: "My employer hasn't paid me for the last 3 weeks, citing cash flow problems. I've asked multiple times and received no payment or definitive timeline." },
      { label: "Employer", arg: "We're experiencing temporary cash flow difficulties. We will pay as soon as the situation resolves." },
    ],
    faqs: [
      { q: "Can my employer delay my wages for financial reasons?", a: "No. In virtually every jurisdiction, employers must pay wages on agreed paydays. Cash flow problems are not a legal defence. The obligation to pay wages is absolute." },
      { q: "What can I claim in addition to the unpaid wages?", a: "US: Liquidated damages equal to unpaid wages under FLSA. UK: A 'week's pay' per year of service as unlawful deduction. Australia: penalties on the employer under the Fair Work Act. Most jurisdictions also allow interest." },
      { q: "Should I resign because of unpaid wages?", a: "Document the unpaid wages first. In many jurisdictions, you can resign and claim constructive dismissal — treating the non-payment as a fundamental breach that entitled you to leave. But don't resign hastily; get advice first." },
      { q: "Who enforces unpaid wage claims?", a: "US: FLSA claims through the Department of Labor or privately in court. UK: Employment Tribunal for unlawful deductions. Australia: Fair Work Ombudsman. Most have free complaint processes." },
    ],
    related: ["employer-not-paying-overtime", "fired-without-notice", "unfair-dismissal"],
  },
  "dog-bite-liability": {
    emoji: "🐕",
    category: "Neighbours",
    title: "Dog Bite — Who Is Liable? | InstantVerdict",
    desc: "Bitten by a neighbour's dog? Find out who's legally responsible and what compensation you may be entitled to. Free AI verdict.",
    h1: "Dog Bite Incident — Who Is Legally Liable?",
    sub: "Dog owners have legal responsibilities. Find out if the owner is liable for your injury.",
    intro: "Dog bite liability varies significantly by jurisdiction. Most countries and US states impose strict liability on dog owners — meaning the owner is liable even if the dog had no prior history of aggression. Some jurisdictions (handful of US states) still use the 'one bite rule' — where owners are only liable if they knew the dog was dangerous. Defences include provocation and trespass.",
    sides: [
      { label: "Victim", arg: "My neighbour's dog bit me while I was walking on the public footpath. I did nothing to provoke the dog. I needed medical treatment." },
      { label: "Dog Owner", arg: "The dog has never bitten anyone before. The victim was approaching the dog in an unusual way that startled it. I am not liable." },
    ],
    faqs: [
      { q: "Is a dog owner automatically liable for a bite?", a: "In most jurisdictions, yes — strict liability applies. UK: Animals Act 1971 imposes strict liability in most cases. Most US states (44+): strict liability for dog bites regardless of prior behaviour. 'One bite rule' states: only liable if owner knew of dangerous propensity." },
      { q: "Does the 'one bite rule' still exist?", a: "In a diminishing number of US states (Alabama, Alaska, Idaho, Kansas, Mississippi, North Dakota, Wyoming) the 'one bite rule' still applies — meaning owners escape liability for a first bite if they had no reason to know the dog was dangerous." },
      { q: "What defences can a dog owner raise?", a: "Provocation (victim teased or taunted the dog), trespass (victim was on private property without permission), assumption of risk (victim knew the dog was dangerous and voluntarily engaged with it)." },
      { q: "What compensation can I claim for a dog bite?", a: "Medical expenses (present and future), lost earnings, pain and suffering, emotional distress, and scarring/disfigurement damages. Homeowner's insurance often covers dog bite claims." },
    ],
    related: ["noise-complaint-neighbour", "boundary-dispute", "who-pays-for-damage"],
  },
  "who-pays-for-damage": {
    emoji: "💥",
    category: "Money",
    title: "Who Pays for the Damage? Liability Disputes | InstantVerdict",
    desc: "Accident caused damage — who's responsible? Get an AI verdict on liability. Covers property damage, accidents, and negligence claims. Free.",
    h1: "Property Damage Dispute — Who Is Liable?",
    sub: "When something gets damaged, someone has to pay. Find out who the law says it should be.",
    intro: "Property damage liability is determined by negligence — who failed to take reasonable care. Key questions are: who had control of the situation, who had a duty of care, and whether that duty was breached causing the damage. Contributory negligence (the victim's own fault) can reduce or eliminate liability in some jurisdictions.",
    sides: [
      { label: "Claimant", arg: "My contractor accidentally broke an expensive item in my home while working. They claim it was an accident and refuse to pay for the damage." },
      { label: "Contractor", arg: "The item was placed in an area we were clearly working in. The homeowner assumed the risk by leaving it there." },
    ],
    faqs: [
      { q: "Is an accident always a defence to a damage claim?", a: "No. In negligence law, the question is whether reasonable care was taken — not whether the damage was intentional. If someone was careless, they can be liable even for accidental damage." },
      { q: "Does a contractor's insurance cover accidental damage?", a: "Most professional contractors carry public liability insurance that covers accidental damage to client property. You can request their insurance details and file a claim directly with their insurer." },
      { q: "What if I caused accidental damage to someone else's property?", a: "You may be liable if you were negligent. Your homeowner's or renter's insurance policy may cover damage you accidentally cause to third parties — check your policy." },
      { q: "How do I calculate the value of damaged property?", a: "Typically the cost to repair, or replacement value if repair isn't possible. Depreciation may be factored in for older items. Keep all receipts, photos, and get quotes from repair services." },
    ],
    related: ["car-accident", "friend-owes-me-money", "landlord-wont-return-deposit"],
  },
  "subscription-cancellation-dispute": {
    emoji: "📱",
    category: "Consumer",
    title: "Subscription Won't Let Me Cancel — What Are My Rights? | InstantVerdict",
    desc: "Subscription service refusing to cancel or continuing to charge after cancellation? Know your rights. Free AI verdict.",
    h1: "Subscription Cancellation Dispute — Can They Keep Charging Me?",
    sub: "Subscriptions that won't cancel are one of the most common consumer complaints. Here are your rights.",
    intro: "Subscription traps and dark patterns that make cancellation difficult are increasingly regulated. In the UK, the Consumer Contracts Regulations give clear rights to cancel services. The US FTC's 'click to cancel' rule (2024) requires cancellation to be as easy as signing up. Auto-renewals without proper disclosure are often unlawful.",
    sides: [
      { label: "Consumer", arg: "I cancelled my subscription 2 months ago but the company has continued charging my card. They claim they have no record of my cancellation." },
      { label: "Company", arg: "Our records show no cancellation was submitted. The charges are valid under the subscription terms agreed at sign-up." },
    ],
    faqs: [
      { q: "Can a subscription service charge me after I've cancelled?", a: "No — charging after a confirmed cancellation is unlawful in most jurisdictions and constitutes an unauthorised transaction. You can dispute the charges with your bank and seek a full refund." },
      { q: "What if I can't prove I cancelled?", a: "Always cancel in writing (email to customer support) and keep a copy. If the company's only cancellation method is a phone call, record the date and time. Screenshots of the cancellation process are valuable." },
      { q: "How do I stop recurring charges from a subscription?", a: "Contact your bank to block recurring payments from that merchant or request a new card number. Under UK Continuous Payment Authority rules, you can instruct your bank to stop payments — they are obliged to comply." },
      { q: "What regulation covers auto-renewals?", a: "UK: Consumer Contracts Regulations 2013 + financial services regulation. Australia: Australian Consumer Law (misleading conduct). US: varies by state; California has strong auto-renewal disclosure laws. FTC Act also applies to US businesses." },
    ],
    related: ["company-refusing-refund", "online-purchase-scam", "freelancer-not-paid"],
  },
  "defamation-online": {
    emoji: "💬",
    category: "Online",
    title: "Someone Is Spreading Lies About Me Online — Do I Have a Claim? | InstantVerdict",
    desc: "Defamatory posts or false reviews targeting you online? Find out if you have a defamation claim. Free AI verdict, instant.",
    h1: "Online Defamation — Is What They Said About Me Illegal?",
    sub: "False statements that damage your reputation are actionable. Find out if your situation qualifies.",
    intro: "Defamation (libel when written, slander when spoken) requires: (1) a false statement of fact (not opinion), (2) published to a third party, (3) that identifies you, and (4) causes reputational damage. Truth is always a complete defence. Online reviews and social media posts can constitute defamation if they contain false statements of fact.",
    sides: [
      { label: "Target", arg: "A former business partner has posted false accusations of fraud against me on multiple review sites and social media. It's affecting my business and is entirely fabricated." },
      { label: "Poster", arg: "Everything I stated is my honest opinion based on my genuine experience. I have a right to share my experience." },
    ],
    faqs: [
      { q: "What is the difference between opinion and defamation?", a: "Opinions cannot be defamatory — only false statements of fact. 'I think X is a terrible service' is opinion. 'X commits fraud' stated as fact is potentially defamatory if false." },
      { q: "Can I sue someone for a bad online review?", a: "Only if it contains false statements of fact — not just negative opinions. Many 'defamation' claims fail because the reviews express opinions or are true. You need to prove the statement is factually false." },
      { q: "Can I get defamatory content removed without suing?", a: "Yes — most platforms have defamation report mechanisms. You can send a formal cease and desist letter to the poster. In the UK, the Defamation Act 2013 provides a process to request removal from platforms without litigation." },
      { q: "What is 'publication' for defamation purposes?", a: "Each new person who reads the false statement constitutes a fresh 'publication'. Sharing a defamatory post, republishing it, or leaving it up after being informed of the complaint can each create new liability." },
    ],
    related: ["online-purchase-scam", "freelancer-not-paid", "workplace-harassment"],
  },
  "freelancer-not-paid": {
    emoji: "💻",
    category: "Money",
    title: "Client Won't Pay My Invoice — Freelancer Rights | InstantVerdict",
    desc: "Client refusing to pay for completed work? Find out your rights as a freelancer. AI verdict based on contract law. Free, instant.",
    h1: "Client Won't Pay My Invoice — What Can I Do?",
    sub: "You did the work. You deserve to be paid. Find out what the law says.",
    intro: "Freelancers have strong legal rights to payment for completed work. A contract exists once services were agreed and work was performed — even without a formal written agreement. Non-payment is breach of contract. Late payment is also regulated: UK businesses can charge interest under the Late Payment of Commercial Debts Act 1998; similar legislation exists in many countries.",
    sides: [
      { label: "Freelancer", arg: "I completed the project as agreed. The client received and used my deliverables but is refusing to pay the £3,000 invoice, claiming the work wasn't up to standard." },
      { label: "Client", arg: "The deliverables did not meet the agreed specifications. We are not obliged to pay for substandard work." },
    ],
    faqs: [
      { q: "Do I need a written contract to claim unpaid fees?", a: "No — verbal contracts are enforceable, though harder to prove. Emails confirming the scope of work, agreed fees, and delivery constitute strong evidence even without a formal written contract." },
      { q: "What interest can I charge on a late invoice (UK)?", a: "Under the Late Payment of Commercial Debts Act 1998, statutory interest of 8% above the Bank of England base rate applies automatically on B2B invoices after 30 days. You can also claim debt recovery costs (£40-£100 fixed fee)." },
      { q: "What if the client claims the work was substandard?", a: "They must pay unless the work materially failed to meet agreed specifications. Minor imperfections don't entitle withholding of the full fee. If only part of the work was deficient, you're typically entitled to proportionate payment." },
      { q: "How do I recover unpaid freelance fees?", a: "1) Formal demand letter. 2) Statutory demand (UK). 3) Small claims court (fast, cheap, no lawyer needed for amounts under £10,000 in UK / varies by US state). 4) Debt recovery agency for business clients." },
    ],
    related: ["friend-owes-me-money", "company-refusing-refund", "business-partner-dispute"],
  },
  "eviction-notice": {
    emoji: "📬",
    category: "Housing",
    title: "Eviction Notice — Is It Legal? What Are My Rights? | InstantVerdict",
    desc: "Received an eviction notice? Find out if it's legally valid and what your options are. AI verdict based on tenancy law. Free.",
    h1: "Eviction Notice — Is This Legal?",
    sub: "Not all eviction notices are valid. Find out if yours follows the law.",
    intro: "Eviction (possession proceedings) requires landlords to follow strict legal procedures. An eviction notice must: be on the correct legal form, give the required notice period, state valid legal grounds, and be served correctly. A notice that fails any of these requirements is invalid. Tenants cannot be forcibly evicted without a court order in most countries.",
    sides: [
      { label: "Tenant", arg: "I received a written eviction notice giving me 2 weeks to leave. The landlord claims I've violated the lease by having a pet, but I've had my dog for 2 years without complaint." },
      { label: "Landlord", arg: "The tenancy agreement clearly prohibits pets. The tenant has been in breach of this clause throughout their tenancy." },
    ],
    faqs: [
      { q: "Can my landlord evict me immediately?", a: "No — in virtually every jurisdiction, landlords must follow formal legal processes, including proper notice periods and a court order if you refuse to leave. 'Self-help' eviction (changing locks, removing belongings) is illegal everywhere." },
      { q: "What notice period am I entitled to?", a: "Varies significantly: UK: minimum 2 months (longer in many cases post-2020). Australia: varies by state, typically 30-90 days. US: varies by state, typically 30-60 days for no-cause. Shorter notice is only valid for specific serious breaches." },
      { q: "What are valid grounds for eviction?", a: "Typically: non-payment of rent, serious breach of tenancy terms, antisocial behaviour, landlord requires the property for personal use, or genuine end of fixed term. Evicting in retaliation for a complaint is illegal." },
      { q: "Can I be evicted while disputing the notice?", a: "Not without a court order. If you remain in the property, the landlord must go to court. This typically takes weeks to months. Use this time to challenge the notice's validity." },
    ],
    related: ["landlord-wont-return-deposit", "landlord-entered-without-notice", "landlord-wont-fix-repairs"],
  },
  "business-partner-dispute": {
    emoji: "🤝",
    category: "Money",
    title: "Business Partner Dispute — Who Is Right? | InstantVerdict",
    desc: "Business partnership gone wrong? Disagreement over profits, duties, or decisions? AI verdict based on partnership and contract law. Free.",
    h1: "Business Partner Dispute — What Are the Legal Rights?",
    sub: "Business relationships break down. When they do, the law determines who gets what.",
    intro: "Business partner disputes involve contractual rights (usually from a partnership agreement) and fiduciary duties (the obligations partners owe each other). Without a written partnership agreement, the Partnership Act 1890 (UK) or state uniform partnership acts (US) imply default terms — including equal profit sharing and unanimous decision-making rights.",
    sides: [
      { label: "Partner A", arg: "My business partner has been taking money from the business account for personal expenses without my knowledge or consent. I want to dissolve the partnership." },
      { label: "Partner B", arg: "Those payments were legitimate business expenses that I approved as the managing partner. We never formally restricted individual partner spending." },
    ],
    faqs: [
      { q: "What happens if we have no formal partnership agreement?", a: "The Partnership Act 1890 (UK) or your state's Uniform Partnership Act (US) applies. Default rules: equal shares of profits/losses, unanimous consent for major decisions, equal management rights. These defaults are often not what partners actually want." },
      { q: "Can a partner be removed from a business?", a: "Only if the partnership agreement provides for this, or by court order (for serious misconduct), or by dissolving the partnership. You cannot simply remove a partner without legal grounds." },
      { q: "What is a partner's fiduciary duty?", a: "Partners owe each other duties of loyalty, care, and good faith — they must act in the partnership's interests, not their own. Secretly taking business funds for personal use is a clear breach of fiduciary duty." },
      { q: "How is a business partnership dissolved?", a: "By agreement, expiry of the agreed term, a partner's death or bankruptcy, by court order, or by notice (in partnerships with no fixed term). Dissolution triggers a formal winding-up process to distribute assets." },
    ],
    related: ["freelancer-not-paid", "friend-owes-me-money", "employer-not-paying-wages"],
  },
  "neighbour-parking-dispute": {
    emoji: "🚘",
    category: "Neighbours",
    title: "Neighbour Parking Dispute — Who Has the Right? | InstantVerdict",
    desc: "Neighbour blocking your driveway or parking space? Find out your legal rights. AI verdict based on highway and property law. Free.",
    h1: "Neighbour Parking Dispute — Am I Right?",
    sub: "Parking disputes are petty but they're serious. Find out exactly what you're legally entitled to.",
    intro: "Parking disputes typically involve: blocking driveways, parking in designated spaces, obstruction of the highway, or encroachment on private land. Blocking someone's driveway prevents access to private property — this is both a civil wrong and (in many jurisdictions) a criminal offence. Public roads are governed by highway law; private parking spaces by property and contract law.",
    sides: [
      { label: "Complainant", arg: "My neighbour regularly parks in front of my driveway, preventing me from leaving or returning to my property. They deny it's a problem." },
      { label: "Neighbour", arg: "I park on a public road. There is no law against parking in any position on a public road. They're overreacting." },
    ],
    faqs: [
      { q: "Is it illegal to block someone's driveway?", a: "Yes in most jurisdictions. In the UK, it's an obstruction of the highway and actionable by police. In most US cities, blocking a driveway is a ticketable parking violation. The vehicle can typically be towed." },
      { q: "Can I have someone's car towed for blocking my driveway?", a: "UK: Contact the police — they can issue a ticket or arrange removal. US: Many cities allow you to request towing of a vehicle blocking your driveway by calling 311 or the local parking authority." },
      { q: "What if my neighbour parks in my private parking space?", a: "Private parking spaces are property. Unauthorised parking is trespass. You may be able to clamp or tow the vehicle (check local laws — clamping rules vary) or seek an injunction." },
      { q: "What if my neighbour parks on my land?", a: "This is trespass. You can ask them to remove the vehicle, erect barriers, and ultimately seek a court order. Repeated trespass may also support an injunction." },
    ],
    related: ["noise-complaint-neighbour", "boundary-dispute", "hoa-fine-dispute"],
  },
  "discrimination-rental": {
    emoji: "🏡",
    category: "Housing",
    title: "Landlord Discriminating Against Me — Is This Legal? | InstantVerdict",
    desc: "Refused a rental or treated unfairly due to race, religion, disability, or other protected characteristics? Know your fair housing rights. Free.",
    h1: "Rental Discrimination — Am I Being Treated Illegally?",
    sub: "Housing discrimination is illegal. Find out if what's happening to you crosses the legal line.",
    intro: "Fair housing laws prohibit landlords from refusing to rent, setting different terms, or otherwise discriminating based on protected characteristics. In the US, the Fair Housing Act (FHA) covers race, colour, national origin, religion, sex, familial status, and disability. The UK Equality Act 2010 covers race, sex, disability, religion, sexual orientation, and more. Australia's anti-discrimination laws apply federally and state-wide.",
    sides: [
      { label: "Applicant", arg: "I believe I was refused a rental because of my nationality. The landlord was welcoming until they learned I was from another country, then suddenly said the property was 'no longer available'." },
      { label: "Landlord", arg: "The decision to choose another applicant was based on financial criteria and references, not nationality. No discrimination occurred." },
    ],
    faqs: [
      { q: "What counts as housing discrimination?", a: "Refusing to rent, requiring different terms, providing different services, or making discriminatory statements based on race, national origin, religion, sex, disability, familial status (US FHA) or other protected characteristics." },
      { q: "How do I prove housing discrimination?", a: "Direct evidence (discriminatory statements) or circumstantial evidence (you were qualified, the property remained available, they showed different treatment to others). Testing (sending similar applicants of different backgrounds) is a recognised investigative tool." },
      { q: "Where do I report housing discrimination?", a: "US: HUD (FHA complaints) or state housing agency. UK: Equality Advisory and Support Service or Employment Tribunal for housing claims. Australia: Australian Human Rights Commission or state anti-discrimination board." },
      { q: "Can I claim compensation for housing discrimination?", a: "Yes — remedies include: ordering the landlord to rent to you, compensation for housing costs incurred, emotional distress damages, and injunctions against future discrimination." },
    ],
    related: ["eviction-notice", "landlord-wont-return-deposit", "workplace-harassment"],
  },
};

const SLUGS = Object.keys(SCENARIOS);

export function generateStaticParams() {
  return SLUGS.map((scenario) => ({ scenario }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ scenario: string }>;
}): Promise<Metadata> {
  const { scenario } = await params;
  const data = SCENARIOS[scenario] ?? SCENARIOS["landlord-wont-return-deposit"];
  const url = `${BASE}/settle/${scenario}`;
  return {
    title: data.title,
    description: data.desc,
    alternates: { canonical: url },
    openGraph: {
      title: data.title,
      description: data.desc,
      url,
      siteName: "InstantVerdict",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.desc,
    },
  };
}

export default async function SettlePage({
  params,
}: {
  params: Promise<{ scenario: string }>;
}) {
  const { scenario } = await params;
  const data = SCENARIOS[scenario] ?? SCENARIOS["landlord-wont-return-deposit"];
  const url = `${BASE}/settle/${scenario}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Settle", item: `${BASE}/settle` },
      { "@type": "ListItem", position: 3, name: data.h1, item: url },
    ],
  };

  const relatedScenarios = data.related
    .filter((s) => SCENARIOS[s])
    .map((s) => ({ slug: s, data: SCENARIOS[s] }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-white text-[#0A0A0A] font-[var(--font-space)]">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-[#6B7280] mb-8">
              <Link href="/" className="hover:text-[#FF3B30] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#FF3B30] font-medium">{data.category}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#FFF0EF] text-[#FF3B30] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span>{data.emoji}</span>
              <span>{data.category}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5">
              {data.h1}
            </h1>
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed mb-8 max-w-2xl">
              {data.sub}
            </p>

            <Link href="/case">
              <span className="inline-flex items-center gap-3 bg-[#FF3B30] text-white font-black rounded-xl px-8 py-4 hover:bg-[#CC2E24] transition-all text-lg shadow-[0_8px_30px_rgba(255,59,48,0.3)] hover:-translate-y-0.5">
                ⚖️ Get My Verdict — Free
              </span>
            </Link>
            <p className="text-xs text-[#6B7280] mt-3">
              Free to start · Verdict in 10–20 seconds · No account required
            </p>
          </div>
        </section>

        <div className="h-px bg-[#E5E7EB] max-w-6xl mx-auto" />

        {/* Intro */}
        <section className="py-14 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">The Legal Picture</p>
            <p className="text-base leading-relaxed text-[#374151]">{data.intro}</p>
          </div>
        </section>

        {/* Example sides */}
        <section className="py-14 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-6">Typical Arguments</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {data.sides.map((side, i) => (
                <div key={i} className="rounded-2xl border-2 border-[#E5E7EB] p-5">
                  <p className="text-xs font-black uppercase tracking-widest text-[#6B7280] mb-2">{side.label}</p>
                  <p className="text-sm text-[#374151] leading-relaxed">&ldquo;{side.arg}&rdquo;</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-[#6B7280] mb-4">Who is right in your situation? The details change everything.</p>
              <Link href="/case">
                <span className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-black rounded-xl px-6 py-3 hover:bg-[#1A1A1A] transition-all text-sm">
                  ⚖️ Submit Your Specific Case
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-black mb-8">Common Questions</h2>
            <FaqAccordion faqs={data.faqs} />
          </div>
        </section>

        {/* Related */}
        {relatedScenarios.length > 0 && (
          <section className="py-14 px-4 sm:px-6 bg-white">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-5">Related disputes</p>
              <div className="flex flex-wrap gap-3">
                {relatedScenarios.map(({ slug, data: rel }) => (
                  <Link
                    key={slug}
                    href={`/settle/${slug}`}
                    className="inline-flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] text-sm text-[#0A0A0A] px-4 py-2 rounded-full hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all font-medium"
                  >
                    <span>{rel.emoji}</span>
                    <span>{rel.h1.replace(/ — .*/, "").replace(/ \?.*/, "")}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 bg-[#0A0A0A] text-white text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">Get Your Answer</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Every dispute is different. Get yours settled.
            </h2>
            <p className="text-[#6B7280] mb-8">
              AI verdict grounded in real law from your country. Free to start.
            </p>
            <Link href="/case">
              <span className="inline-flex items-center gap-3 bg-[#FF3B30] text-white font-black rounded-xl px-8 py-4 hover:bg-[#CC2E24] transition-all text-lg">
                ⚖️ Get My Verdict — Free
              </span>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
