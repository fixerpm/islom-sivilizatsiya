let cards = document.querySelector(".cards")

function nl2br(text) {
    return (text || "—").replace(/\n/g, "<br>")
}

let html = ""
for (let el of products) {
    html += `
 <a href="../pages/forum-people.html"
 class="group rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-[#0b1220] p-[1px] shadow-2xl transition-all duration-500 hover:shadow-blue-500/20 hover:-translate-y-1">

 <div class="rounded-3xl bg-[#0f172a]/95 backdrop-blur-xl overflow-hidden">

    <!-- IMAGE -->
    <div class="relative">

        <div class="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>

        <div class="flex justify-center py-8">

            <img
                src="${el.rasm}"
                alt="${el.mehmon.split('\n')[0]}"
                loading="lazy"
                onerror="this.style.display='none'"
                class="h-52 w-52 rounded-3xl object-cover ring-4 ring-slate-700 group-hover:ring-blue-500/40 transition duration-500 shadow-2xl">

        </div>

    </div>

    <!-- CONTENT -->

    <div class="px-6 pb-6">

        <!-- HEADER -->

        <div class="flex justify-between items-start gap-4">

            <div>

                <h2 class="text-2xl font-bold text-white leading-snug">
                    ${nl2br(el.mehmon)}
                </h2>

                <p class="text-slate-400 text-sm mt-2">
                    Mehmon haqida ma'lumot
                </p>

            </div>

            <span
                class="shrink-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                ${el.davlati}
            </span>

        </div>

        <!-- INFO -->

        <div class="mt-8 space-y-4">

            <!-- Ticket -->

            <div
                class="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 hover:border-blue-500/40 transition">

                <div class="flex justify-between gap-5">

                    <div class="flex items-center gap-3">

                        <div class="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center">

                            <img src="./icons/ticket.svg" class="w-5 h-5">

                        </div>

                        <div>

                            <p class="text-slate-400 text-sm">Билет</p>

                        </div>

                    </div>

                    <div class="text-right text-white leading-7">

                        ${nl2br(el.bilet)}

                    </div>

                </div>

            </div>

            <!-- Toshkent -->

            <div
                class="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 hover:border-blue-500/40 transition">

                <div class="flex justify-between gap-5">

                    <div class="flex items-center gap-3">

                        <div class="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center">

                            <img src="./icons/location.svg" class="w-5 h-5">

                        </div>

                        <p class="text-slate-400">Тошкент</p>

                    </div>

                    <div class="text-right text-white leading-7">

                        ${nl2br(el.toshkent)}

                    </div>

                </div>

            </div>

            <!-- Samarqand -->

            <div
                class="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 hover:border-blue-500/40 transition">

                <div class="flex justify-between gap-5">

                    <div class="flex items-center gap-3">

                        <div class="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center">

                            <img src="./icons/buildings.svg" class="w-5 h-5">

                        </div>

                        <p class="text-slate-400">Самарқанд</p>

                    </div>

                    <div class="text-right text-white leading-7">

                        ${nl2br(el.samarqand)}

                    </div>

                </div>

            </div>

            <!-- Termiz -->

            <div
                class="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 hover:border-blue-500/40 transition">

                <div class="flex justify-between gap-5">

                    <div class="flex items-center gap-3">

                        <div class="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center">

                            <img src="./icons/hotel.svg" class="w-5 h-5">

                        </div>

                        <p class="text-slate-400">Термиз</p>

                    </div>

                    <div class="text-right text-white leading-7">

                        ${nl2br(el.termiz)}

                    </div>

                </div>

            </div>

        </div>

        <!-- RETURN -->

        <div
            class="mt-7 rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-500/5 to-transparent p-5">

            <div class="flex items-center gap-2">

                <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">

                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v4m0 4h.01M10.29 3.86L1.82 18A2 2 0 003.53 21h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>

                </svg>

                <h4 class="text-red-400 font-semibold">
                    Причина возврата / обмена
                </h4>

            </div>

            <p class="mt-3 text-slate-300 leading-7">

                ${nl2br(el.sabab)}

            </p>

        </div>

    </div>

 </div>

</a>
    `
}
cards.innerHTML = html


let loading = document.querySelector(".loading")

window.addEventListener("load", function () {
    loading.classList.add("hidden")
});