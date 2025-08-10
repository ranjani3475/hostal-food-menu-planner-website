/* script.js
   - put this file in same folder and include in every page (we already link it in each HTML)
   - all functions are global so onClick attributes in HTML will work
*/

/* -------------------- 30-day menu (same plan for all hostels) -------------------- */
/* menuPlan is keyed by day number 1..30 (month-agnostic). */
const menuPlan = {
  1:  { breakfast: {dish:"Idli & Sambar", benefits:"Light, fermented; good morning energy."},
        lunch:     {dish:"Sambar Rice & Veg Poriyal", benefits:"Balanced carbs & fiber."},
        dinner:    {dish:"Chapati & Paneer Curry", benefits:"High protein & calcium."} },
  2:  { breakfast: {dish:"Masala Dosa & Coconut Chutney", benefits:"Carbs + healthy coconut fats."},
        lunch:     {dish:"Curd Rice & Pickle", benefits:"Cooling and probiotic."},
        dinner:    {dish:"Vegetable Pulao & Raita", benefits:"Aromatic and nutrient-rich."} },
  3:  { breakfast: {dish:"Aloo Paratha & Curd", benefits:"Energy-dense with probiotics."},
        lunch:     {dish:"Dal Tadka & Jeera Rice", benefits:"Protein-rich and filling."},
        dinner:    {dish:"Rava Upma & Coconut Chutney", benefits:"Light and easy to digest."} },
  4:  { breakfast: {dish:"Pongal & Chutney", benefits:"Comforting, easy on stomach."},
        lunch:     {dish:"Vegetable Kurma & Chapati", benefits:"Vitamins and fiber."},
        dinner:    {dish:"Tomato Rice & Papad", benefits:"Tangy & light."} },
  5:  { breakfast: {dish:"Poori & Potato Masala", benefits:"High-energy start."},
        lunch:     {dish:"Rajma Chawal", benefits:"Protein & iron rich."},
        dinner:    {dish:"Dosa & Sambar", benefits:"Fermented and gut-friendly."} },
  6:  { breakfast: {dish:"Poha with Peanuts", benefits:"Light, quick energy with healthy fats."},
        lunch:     {dish:"Chole & Rice", benefits:"Protein and fiber."},
        dinner:    {dish:"Vegetable Khichdi", benefits:"Comforting & easy to digest."} },
  7:  { breakfast: {dish:"Upma & Mango Chutney", benefits:"Low calorie, filling."},
        lunch:     {dish:"Curd Rice & Fried Papad", benefits:"Cooling & probiotic."},
        dinner:    {dish:"Chapati & Mixed Veg Curry", benefits:"Balanced meal."} },
  8:  { breakfast: {dish:"Set Dosa & Potato Saagu", benefits:"Soft carbs and spice."},
        lunch:     {dish:"Sambar Rice & Beans Poriyal", benefits:"High fiber & protein."},
        dinner:    {dish:"Peas Pulao & Raita", benefits:"Nutritious & aromatic."} },
  9:  { breakfast: {dish:"Aloo Poori", benefits:"Hearty and filling."},
        lunch:     {dish:"Dal Fry & Rice", benefits:"Simple protein meal."},
        dinner:    {dish:"Idiyappam & Vegetable Kurma", benefits:"Light and soft."} },
 10:  { breakfast: {dish:"Onion Uthappam", benefits:"Fiber-rich & tasty."},
        lunch:     {dish:"Vegetable Biryani & Boondi Raita", benefits:"Flavorful & balanced."},
        dinner:    {dish:"Lemon Rice & Fryums", benefits:"Refreshing & light."} },
 11:  { breakfast: {dish:"Rava Idli & Sambar", benefits:"Quick energy and fermented benefits."},
        lunch:     {dish:"Tamarind Rice (Puliyodarai) & Sundal", benefits:"Tangy and protein from legumes."},
        dinner:    {dish:"Chapati & Methi Potato", benefits:"Fiber & iron rich."} },
 12:  { breakfast: {dish:"Appam & Vegetable Stew", benefits:"Light and mildly sweet."},
        lunch:     {dish:"Veg Kurma & Rice", benefits:"Vitamins & healthy fats."},
        dinner:    {dish:"Curd Rice & Pickle", benefits:"Soothing and probiotic."} },
 13:  { breakfast: {dish:"Parotta & Egg Curry (or Veg Kurma)", benefits:"Filling, protein option."},
        lunch:     {dish:"Chole Chawal", benefits:"Protein and satisfying."},
        dinner:    {dish:"Dosa & Tomato Chutney", benefits:"Light and fermented."} },
 14:  { breakfast: {dish:"Vegetable Upma", benefits:"Low calorie & fiber-rich."},
        lunch:     {dish:"Veg Fried Rice & Manchurian", benefits:"Flavorful with veggies."},
        dinner:    {dish:"Tomato Rasam & Rice", benefits:"Soothing & easy to digest."} },
 15:  { breakfast: {dish:"Idli & Coconut Chutney", benefits:"Light & energizing."},
        lunch:     {dish:"Paneer Butter Masala & Naan", benefits:"High protein & calcium."},
        dinner:    {dish:"Vegetable Khichdi", benefits:"Comforting & wholesome."} },
 16:  { breakfast: {dish:"Dosa & Sambar", benefits:"Fermented & gut-friendly."},
        lunch:     {dish:"Sambar Rice & Veg Poriyal", benefits:"Balanced nutrition."},
        dinner:    {dish:"Chapati & Veg Kurma", benefits:"Fiber & vitamins."} },
 17:  { breakfast: {dish:"Poori & Chana Masala", benefits:"Protein-dense & filling."},
        lunch:     {dish:"Dal Makhani & Rice", benefits:"High-protein, iron-rich."},
        dinner:    {dish:"Lemon Rice & Yogurt", benefits:"Refreshing & probiotic."} },
 18:  { breakfast: {dish:"Upma & Banana", benefits:"Light + potassium."},
        lunch:     {dish:"Rajma Chawal", benefits:"Protein & fiber."},
        dinner:    {dish:"Idiyappam & Coconut Kurma", benefits:"Light & tasty."} },
 19:  { breakfast: {dish:"Onion Uthappam", benefits:"Fiber-rich breakfast."},
        lunch:     {dish:"Vegetable Biryani & Raita", benefits:"Flavorful & balanced."},
        dinner:    {dish:"Curd Rice", benefits:"Soothing for stomach."} },
 20:  { breakfast: {dish:"Rava Idli & Chutney", benefits:"Quick energy & fermented."},
        lunch:     {dish:"Tamarind Rice & Sundal", benefits:"Tangy & protein."},
        dinner:    {dish:"Dosa & Sambar", benefits:"Gut-friendly carbs."} },
 21:  { breakfast: {dish:"Appam & Sweet Stew", benefits:"Light & comforting."},
        lunch:     {dish:"Veg Kurma & Rice", benefits:"Nutrient dense."},
        dinner:    {dish:"Tomato Rasam & Rice", benefits:"Hydrating & soothing."} },
 22:  { breakfast: {dish:"Parotta & Vegetable Kurma", benefits:"Satisfying with veggies."},
        lunch:     {dish:"Chole Chawal", benefits:"Protein & fiber."},
        dinner:    {dish:"Vegetable Khichdi", benefits:"Easy to digest."} },
 23:  { breakfast: {dish:"Vegetable Upma", benefits:"Light & filling."},
        lunch:     {dish:"Veg Fried Rice", benefits:"Quick and nutritious."},
        dinner:    {dish:"Lemon Rice & Papad", benefits:"Refreshing & light."} },
 24:  { breakfast: {dish:"Idli & Sambar", benefits:"Light & energizing."},
        lunch:     {dish:"Paneer Masala & Chapati", benefits:"High protein."},
        dinner:    {dish:"Curd Rice", benefits:"Cooling & probiotic."} },
 25:  { breakfast: {dish:"Dosa & Potato Masala", benefits:"Carb + veggies."},
        lunch:     {dish:"Sambar Rice & Beans", benefits:"Balanced & fiber rich."},
        dinner:    {dish:"Tomato Rice & Yogurt", benefits:"Tangy & soothing."} },
 26:  { breakfast: {dish:"Poori & Aloo Sabzi", benefits:"Energy dense."},
        lunch:     {dish:"Dal Tadka & Rice", benefits:"Protein & comfort."},
        dinner:    {dish:"Veg Pulao & Raita", benefits:"Nutritious & light."} },
 27:  { breakfast: {dish:"Upma & Coconut Chutney", benefits:"Healthy & quick."},
        lunch:     {dish:"Rajma Chawal", benefits:"Protein heavy."},
        dinner:    {dish:"Chapati & Mixed Veg", benefits:"Balanced meal."} },
 28:  { breakfast: {dish:"Onion Uthappam", benefits:"Fibre & flavor."},
        lunch:     {dish:"Vegetable Biryani", benefits:"Balanced & tasty."},
        dinner:    {dish:"Curd Rice & Pickle", benefits:"Soothing."} },
 29:  { breakfast: {dish:"Rava Idli", benefits:"Quick energy."},
        lunch:     {dish:"Tamarind Rice & Sundal", benefits:"Tangy & protein."},
        dinner:    {dish:"Dosa & Chutney", benefits:"Fermented & light."} },
 30:  { breakfast: {dish:"Appam & Stew", benefits:"Soft & mild."},
        lunch:     {dish:"Veg Kurma & Rice", benefits:"Vitamins & minerals."},
        dinner:    {dish:"Tomato Rasam & Rice", benefits:"Soothing & hydrating."} }
};

/* -------------------- Navigation & helpers -------------------- */

function chooseType(type) {
  localStorage.setItem('hostelType', type);
  // clear downstream selections (if any)
  localStorage.removeItem('hostelName');
  localStorage.removeItem('selectedDate');
  localStorage.removeItem('mealType');
  window.location.href = 'hostel.html';
}

function chooseHostel(name) {
  localStorage.setItem('hostelName', name);
  localStorage.removeItem('selectedDate');
  localStorage.removeItem('mealType');
  window.location.href = 'date.html';
}

function chooseDate() {
  const dateEl = document.getElementById('menuDate');
  if (!dateEl) { alert('Date input not found'); return; }
  const dateVal = dateEl.value;
  if (!dateVal) { alert('Please select a date'); return; }
  localStorage.setItem('selectedDate', dateVal);
  localStorage.removeItem('mealType');
  window.location.href = 'meal.html';
}

function chooseMeal(meal) {
  localStorage.setItem('mealType', meal);
  window.location.href = 'menu.html';
}

function goBack(page) {
  window.location.href = page;
}

function startOver() {
  localStorage.clear();
  window.location.href = 'index.html';
}

/* -------------------- Page initializers -------------------- */

document.addEventListener('DOMContentLoaded', function () {
  const href = window.location.href;

  if (href.includes('hostel.html')) {
    initHostelPage();
  } else if (href.includes('date.html')) {
    initDatePage();
  } else if (href.includes('meal.html')) {
    initMealPage();
  } else if (href.includes('menu.html')) {
    initMenuPage();
  } else {
    // index.html: nothing to init
  }
});

/* Populate hostel list depending on chosen type */
function initHostelPage() {
  const container = document.getElementById('hostelList');
  if (!container) return;
  const type = localStorage.getItem('hostelType') || 'girls';
  // hostels list
  const girls = ["Narmatha", "Cauvery", "Yamuna", "Ganga", "Bhavani"];
  const boys  = ["Ruby", "Diamond", "Sapphire", "Emerald"];
  const list = type === 'boys' ? boys : girls;

  // header note
  const note = document.createElement('p');
  note.className = 'hint';
  note.innerText = `Selected type: ${type.toUpperCase()}`;
  container.parentNode.insertBefore(note, container);

  // render buttons
  container.innerHTML = '';
  list.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'item-btn';
    btn.innerText = name;
    btn.onclick = function () { chooseHostel(name); };
    container.appendChild(btn);
  });
}

/* Prefill date input with today's date (optional) */
function initDatePage() {
  const dateEl = document.getElementById('menuDate');
  const stored = localStorage.getItem('selectedDate');
  if (stored && dateEl) dateEl.value = stored;
  else if (dateEl) {
    // set today as default
    const today = new Date();
    const iso = today.toISOString().slice(0,10);
    dateEl.value = iso;
  }

  const type = localStorage.getItem('hostelType') || '';
  const hostel = localStorage.getItem('hostelName') || '';
  // show chosen hostel name to user (optional)
  const existing = document.querySelector('.hint');
  if (!existing) {
    const p = document.createElement('p');
    p.className = 'hint';
    p.innerText = `Hostel: ${hostel || '—'}  (Type: ${type || '—'})`;
    document.querySelector('.card').insertBefore(p, document.querySelector('.card').children[1]);
  }
}

/* Optional: show chosen date & hostel on meal page */
function initMealPage() {
  const type = localStorage.getItem('hostelType') || '';
  const hostel = localStorage.getItem('hostelName') || '';
  const date = localStorage.getItem('selectedDate') || '';
  const info = document.createElement('p');
  info.className = 'hint';
  info.innerText = `Hostel: ${hostel || '—'} | Date: ${date || '—'}`;
  const card = document.querySelector('.card');
  if (card) card.insertBefore(info, card.children[1]);
}

/* Render menu on menu.html */
function initMenuPage() {
  const hostel = localStorage.getItem('hostelName') || localStorage.getItem('hostelType') || 'Hostel';
  const dateStr = localStorage.getItem('selectedDate');
  const mealType = localStorage.getItem('mealType'); // breakfast | lunch | dinner

  const header = document.getElementById('menuHeader');
  const mealTitle = document.getElementById('mealTitle');
  const dishName = document.getElementById('dishName');
  const dishBenefits = document.getElementById('dishBenefits');

  if (!dateStr) {
    // missing data — go back
    header.innerText = 'Missing date — please go back';
    mealTitle.innerText = '';
    dishName.innerText = '';
    dishBenefits.innerText = '';
    return;
  }

  header.innerText = `${hostel} • Menu for ${dateStr}`;

  // compute day index 1..30 (month-agnostic)
  let day = (new Date(dateStr)).getDate(); // 1..31
  if (isNaN(day)) day = 1;
  // convert to 1..30 with wrapping
  const dayKey = ((day - 1) % 30) + 1;
  const plan = menuPlan[dayKey];

  if (!plan) {
    mealTitle.innerText = 'No menu found';
    dishName.innerText = '-';
    dishBenefits.innerText = 'Please start over.';
    return;
  }

  if (mealType && plan[mealType]) {
    mealTitle.innerText = mealType.charAt(0).toUpperCase() + mealType.slice(1);
    dishName.innerText = plan[mealType].dish;
    dishBenefits.innerText = plan[mealType].benefits;
  } else {
    // if no mealType chosen, show breakfast by default and allow user to go back to choose meal
    mealTitle.innerText = 'Breakfast (default)';
    dishName.innerText = plan.breakfast.dish;
    dishBenefits.innerText = plan.breakfast.benefits;
  }
}
function chooseType(type) {
  localStorage.setItem("hostelType", type);
  window.location.href = "hostel.html"; // redirect to next page
}
