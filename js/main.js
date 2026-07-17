let cards = document.querySelector(".cards")

function nl2br(text) {
    return (text || "—").replace(/\n/g, "<br>")
}

let html = ""
for (let el of products) {
    html += `
    <div class="bg-[#111827] border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all duration-300">

    <!-- Image -->
    <div class="bg-[#0B1220] flex justify-center items-center p-5 border-b border-slate-700">
        <img
            src="${el.rasm}"
        alt="${el.mehmon.split('\n')[0]}"
        loading="lazy"
        onerror="this.style.display='none'"
        class="h-60 w-60 object-cover rounded-2xl shadow-xl transition duration-300 hover:scale-105"
        >
    </div>

    <!-- Content -->
    <div class="p-5">

        <!-- Header -->
        <div class="flex items-center justify-between mb-5">
            <h3 class="text-white font-semibold text-lg leading-6">
                ${nl2br(el.mehmon)}
            </h3>

            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/20">
                ${el.davlati}
            </span>
        </div>

        <!-- Info -->
        <div class="space-y-3">

            <div class="flex justify-between border-b border-slate-700 pb-2">
                <span class="text-slate-400">🎫 Билет</span>
                <span class="text-white text-right">${nl2br(el.bilet)}</span>
            </div>

            <div class="flex justify-between border-b border-slate-700 pb-2">
                <span class="text-slate-400">📍 Тошкент</span>
                <span class="text-white text-right">${nl2br(el.toshkent)}</span>
            </div>

            <div class="flex justify-between border-b border-slate-700 pb-2">
                <span class="text-slate-400">🏛 Самарқанд</span>
                <span class="text-white text-right">${nl2br(el.samarqand)}</span>
            </div>

            <div class="flex justify-between border-b border-slate-700 pb-2">
                <span class="text-slate-400">🏨 Термиз</span>
                <span class="text-white text-right">${nl2br(el.termiz)}</span>
            </div>

        </div>

        <!-- Sabab -->
        <div class="mt-5 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
            <p class="text-red-400 font-medium text-sm mb-2">
                Причина возврата / обмена
            </p>

            <p class="text-slate-300 text-sm leading-6">
                ${nl2br(el.sabab)}
            </p>
        </div>

    </div>

</div>
    `
}
cards.innerHTML = html


let loading = document.querySelector(".loading")

window.addEventListener("load", function () {
    loading.classList.add("hidden")
});