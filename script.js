document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    // Use year, month (0-indexed), day constructor to avoid UTC timezone shifts
    const startDate = new Date(2025, 11, 20); // Dec 20, 2025
    const endDate = new Date(2026, 0, 20);    // Jan 20, 2026

    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const dateCard = document.createElement('div');
        dateCard.className = 'day-card';

        // Format date for display
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('pt-BR', { month: 'short' });

        // Format date for URL (YYYY-MM-DD) manually to avoid timezone issues
        const yearStr = currentDate.getFullYear();
        const monthStr = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dayStr = String(currentDate.getDate()).padStart(2, '0');
        const dateString = `${yearStr}-${monthStr}-${dayStr}`;

        dateCard.innerHTML = `
            <span class="month-label">${month}</span>
            <span class="date-number">${day}</span>
        `;

        dateCard.addEventListener('click', () => {
            window.location.href = `day.html?date=${dateString}`;
        });

        calendar.appendChild(dateCard);

        // Increment day
        currentDate.setDate(currentDate.getDate() + 1);
    }
});
