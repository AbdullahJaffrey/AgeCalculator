function calculateAge() {
    const dobInput = document.getElementById("input-date").value;
    const dob = new Date(dobInput);
    const now = new Date();
    const ageInMs = now - dob;
    const ageDate = new Date(ageInMs);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    document.getElementById("box").innerHTML = `Your age is ${years} years, ${months} months, and ${days} days old.`;
  }
