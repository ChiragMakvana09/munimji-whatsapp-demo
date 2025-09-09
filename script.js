const demoBtn = document.getElementById('demoBtn');
const callBtn = document.getElementById('callBtn');
const form = document.getElementById('demoForm');
const message = document.getElementById('message');
const stateSelect = document.getElementById('state');
const districtSelect = document.getElementById('district');
const citySelect = document.getElementById('city');

let mode = "Demo";

// Dropdown data
const data = {
  Gujarat: {
    Ahmedabad: ["Maninagar", "SG Highway", "Bopal"],
    Surat: ["Adajan", "Varachha", "Katargam"],
    Rajkot: ["Kalavad Road", "150 Feet Ring Road", "University Road"]
  },
  Maharashtra: {
    Mumbai: ["Andheri", "Borivali", "Dadar"],
    Pune: ["Shivaji Nagar", "Hinjewadi", "Kothrud"],
    Nagpur: ["Sitabuldi", "Dharampeth", "Wardha Road"]
  },
  Rajasthan: {
    Jaipur: ["Malviya Nagar", "Vaishali Nagar", "C-Scheme"],
    Udaipur: ["Hiran Magri", "Fatehpura", "Surajpole"],
    Jodhpur: ["Sardarpura", "Ratanada", "Paota"]
  }
};

// Toggle buttons
demoBtn.addEventListener('click', () => {
  mode = "Demo";
  demoBtn.classList.add('active');
  callBtn.classList.remove('active');
});

callBtn.addEventListener('click', () => {
  mode = "Call";
  callBtn.classList.add('active');
  demoBtn.classList.remove('active');
});

// State change → districts
stateSelect.addEventListener('change', () => {
  const state = stateSelect.value;
  districtSelect.innerHTML = '<option value="">-- Select District --</option>';
  citySelect.innerHTML = '<option value="">-- Select City --</option>';

  if (state && data[state]) {
    Object.keys(data[state]).forEach(district => {
      const option = document.createElement('option');
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  }
});

// District change → cities
districtSelect.addEventListener('change', () => {
  const state = stateSelect.value;
  const district = districtSelect.value;
  citySelect.innerHTML = '<option value="">-- Select City --</option>';

  if (state && district && data[state][district]) {
    data[state][district].forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
});

// Form submit
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const society = form.society.value;
  const state = form.state.value;
  const district = form.district.value;
  const city = form.city.value;
  const date = form.date.value;
  const time = form.time.value;

  message.innerText = `✅ Thank you! Your ${mode} has been booked for ${society}, ${city}, ${district}, ${state} on ${date} at ${time}.`;
  form.reset();
  districtSelect.innerHTML = '<option value="">-- Select District --</option>';
  citySelect.innerHTML = '<option value="">-- Select City --</option>';
});
