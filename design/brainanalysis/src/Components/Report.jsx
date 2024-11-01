import React from "react";
import './report.css';
import Barchart from "./Barcharts";
import Facets from "./Facets";
import { FaDownload } from "react-icons/fa6";
import { MdOutlineInsights } from "react-icons/md";


const openness = {
    Fantasy: { name: 'Fantasy', score: 8 },
    Aesthetics: { name: 'Aesthetics', score: 7 },
    Feelings: { name: 'Feelings', score: 5 },
    Adventurousness: { name: 'Adventurousness', score: 6 },
    IntellectualCuriosity: { name: 'Intellectual curiosity', score: 4 },
    PsychologicalLiberalism: { name: 'Psychological liberalism', score: 4 },
};

export function Report() {

    return (
        <>
            <div className="px-28 pb-14">
                <div className=" mb-20 bg-black text-white flex justify-center items-center text-[7vw] ">
                    <h1 className="ocean opacity-80 font-black tracking-[1em]">
                        <span className="O letter">O</span>
                        <span className="C letter">C</span>
                        <span className="E letter">E</span>
                        <span className="A letter">A</span>
                        <span className="N letter">N</span>

                    </h1>
                </div>
                <div className="flex gap-8 items-center">
                    <div>
                        <h2 className="bg-blue-500 px-2 text-[3vw] opacity-80 font-semibold text-white">Result</h2>
                    </div>
                    <div className="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quam. Vero, ratione doloremque assumenda cumque, aspernatur iusto,<br /> doloribus ipsam esse pariatur aut voluptatibus consequuntur! Corrupti reprehenderit enim vero deleniti perspiciatis?</div>
                </div>
                <div className="grid grid-cols-[3fr_3fr] py-14">
                    <Barchart />
                    <div className="py-5 px-20 opacity-80 flex flex-col">

                        {["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"].map((item, index) => (
                            <>
                                <div className="flex items-center pb-5">
                                    <div className={`h-3 w-3 bg-black ${index === 0 ? "bg-blue-500" :
                                        index === 1 ? "bg-green-500" :
                                            index === 2 ? "bg-red-500" :
                                                index === 3 ? "bg-stone-500" :
                                                    index === 4 ? "bg-purple-500" :
                                                        "text-black"
                                        }`}></div>&nbsp;&nbsp;
                                    <h2 className={`font-semibold text-2xl ${index === 0 ? "text-blue-500" :
                                        index === 1 ? "text-green-500" :
                                            index === 2 ? "text-red-500" :
                                                index === 3 ? "text-stone-500" :
                                                    index === 4 ? "text-purple-500" :
                                                        "text-black"
                                        }`}> {item}: &nbsp;</h2>
                                    <div className="opacity-70 text-lg font-medium">High</div>
                                </div>
                            </>
                        ))}

                    </div>
                </div>

                <div>
                    <div className="openness">
                        <div className="py-5"><h2 className="text-[2vw] bg-blue-500 text-white w-fit px-2 py-1 font-semibold opacity-80">Openness</h2></div>
                        <div className="grid grid-cols-2">
                            <Facets openness={openness} />
                            <div className="opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, aut dignissimos recusandae impedit possimus ea optio, voluptatum perspiciatis, laudantium nesciunt asperiores numquam illo maxime! Modi, quas molestias. Fugit magnam veniam non a corporis libero voluptatum hic consectetur quis maxime incidunt corrupti, soluta quia amet dicta nulla ipsam atque dolorum asperiores? Id ad temporibus iste facere officia dolor, porro praesentium rerum minima excepturi molestiae officiis aperiam eveniet, saepe quisquam voluptatum, qui harum quam aliquid culpa beatae accusantium incidunt! Accusamus non sint quisquam suscipit! Quasi blanditiis illum quisquam expedita enim autem sed, in odio quibusdam repellendus nihil, eius est vel. Exercitationem, neque?</div>
                        </div>
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam, numquam hic voluptates corporis reprehenderit necessitatibus repellat similique distinctio error vel iure tenetur cum rem esse ipsum inventore quia obcaecati. Corporis unde suscipit sed laboriosam dolorum tenetur provident porro praesentium, deserunt dolore minima eaque harum incidunt quos temporibus tempora voluptatibus, repellendus atque veritatis itaque repellat quidem impedit. Unde quam inventore qui magnam praesentium ipsum ipsa? Aperiam, perspiciatis voluptates. Temporibus quod aut vitae dolore deserunt hic modi accusamus. Nesciunt ducimus nulla id odit quod? Quos officiis sequi at quibusdam dolore non reiciendis libero fuga? Velit sapiente cumque, est, sed nihil nobis delectus, inventore atque blanditiis amet incidunt assumenda. Voluptatem molestias, accusantium commodi mollitia autem animi repellendus officia enim culpa quisquam? Quae, saepe eaque sapiente similique consequatur nisi vel nostrum porro, expedita neque consequuntur eligendi ipsam odio ab eos alias deserunt laboriosam. Aspernatur provident dignissimos, minus reiciendis deleniti maxime necessitatibus dolorem nesciunt explicabo deserunt voluptatem officiis dolores ea asperiores eveniet hic accusamus perferendis velit consequuntur, odit mollitia earum cupiditate. Eum temporibus eligendi iusto est quos, provident harum soluta ratione vero illum voluptatibus debitis. Architecto perferendis illo eius quos. Laborum blanditiis consequuntur sed perspiciatis, reiciendis atque, quidem laboriosam earum obcaecati odit commodi quibusdam!</div>
                    </div>
                    <div className="Conscientiousness">
                        <div className="py-5"><h2 className="text-[2vw] bg-green-500 text-white w-fit px-2 py-1 font-semibold opacity-80">Conscientiousness</h2></div>
                        <div className="grid grid-cols-2">
                            <Facets openness={openness} />
                            <div className="opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, aut dignissimos recusandae impedit possimus ea optio, voluptatum perspiciatis, laudantium nesciunt asperiores numquam illo maxime! Modi, quas molestias. Fugit magnam veniam non a corporis libero voluptatum hic consectetur quis maxime incidunt corrupti, soluta quia amet dicta nulla ipsam atque dolorum asperiores? Id ad temporibus iste facere officia dolor, porro praesentium rerum minima excepturi molestiae officiis aperiam eveniet, saepe quisquam voluptatum, qui harum quam aliquid culpa beatae accusantium incidunt! Accusamus non sint quisquam suscipit! Quasi blanditiis illum quisquam expedita enim autem sed, in odio quibusdam repellendus nihil, eius est vel. Exercitationem, neque?</div>
                        </div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex in, nesciunt alias molestiae quis aliquid, nihil similique, quam aut corporis? Est, sed! Maiores eum consequatur molestiae libero possimus dolore delectus cum ipsum. Eos distinctio harum expedita modi dolor, sapiente asperiores sit impedit nesciunt et ipsum architecto recusandae non saepe ratione quos odio numquam laborum. Praesentium incidunt aut officiis illum accusantium, architecto consectetur facere laudantium, dolorum culpa atque. Doloribus illum sapiente odit distinctio corporis eos minus expedita. Pariatur, quia nemo nesciunt aspernatur perferendis voluptatum commodi error labore fuga qui consectetur! Neque laboriosam dolore sapiente explicabo in, facilis quo, est molestias ea libero tempore expedita aut, quia debitis sunt quod sed voluptatem nulla. Error nulla natus corporis in ratione voluptate ipsa molestias mollitia illo aspernatur, quaerat qui, necessitatibus consectetur quas voluptatem quia magnam. Obcaecati ratione cum fuga perferendis nemo quis earum placeat temporibus consequuntur. Cupiditate consequuntur omnis soluta corrupti tempora deleniti voluptas quisquam architecto odio assumenda sequi esse repudiandae asperiores voluptatum dolorem aliquid nihil fuga, provident incidunt aliquam temporibus explicabo fugiat quos! Consectetur iure ex, obcaecati, officiis reiciendis repudiandae esse autem veritatis, maxime soluta et quas laborum dolorem alias reprehenderit tempora officia praesentium. Sint reiciendis veniam molestias, debitis vero quasi omnis.</div>
                    </div>
                    <div className="Extraversion">
                        <div className="py-5"><h2 className="text-[2vw] bg-red-500 text-white w-fit px-2 py-1 font-semibold opacity-80">Extraversion</h2></div>
                        <div className="grid grid-cols-2">
                            <Facets openness={openness} />
                            <div className="opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, aut dignissimos recusandae impedit possimus ea optio, voluptatum perspiciatis, laudantium nesciunt asperiores numquam illo maxime! Modi, quas molestias. Fugit magnam veniam non a corporis libero voluptatum hic consectetur quis maxime incidunt corrupti, soluta quia amet dicta nulla ipsam atque dolorum asperiores? Id ad temporibus iste facere officia dolor, porro praesentium rerum minima excepturi molestiae officiis aperiam eveniet, saepe quisquam voluptatum, qui harum quam aliquid culpa beatae accusantium incidunt! Accusamus non sint quisquam suscipit! Quasi blanditiis illum quisquam expedita enim autem sed, in odio quibusdam repellendus nihil, eius est vel. Exercitationem, neque?</div>
                        </div>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus incidunt velit voluptatem similique, omnis consectetur? Quo a animi pariatur explicabo dolor. Doloribus in quo hic deleniti quas eos, voluptates necessitatibus odit incidunt, laudantium possimus nisi, quia officia. Doloribus, laborum. Laborum odio doloremque numquam? Saepe cumque aliquam voluptate adipisci nisi quae maiores mollitia porro rerum, officia sunt earum harum omnis, nesciunt alias quasi sint rem ullam. Ex ab similique quia at minima quo expedita cum beatae nesciunt animi cupiditate quos architecto culpa id, alias quas deserunt consequatur porro fugit, hic aliquam? Pariatur nisi molestiae delectus alias, assumenda ipsum dicta, illo earum qui ipsa nam. Magni, odio recusandae reprehenderit maiores facere earum necessitatibus atque, sunt ea, dolor deserunt? Optio expedita tenetur eius vel molestias natus sed, recusandae accusantium. Veritatis velit perferendis labore. Natus sapiente neque, sunt vitae veritatis numquam facilis aliquam corrupti officia similique quibusdam earum omnis tempore qui eos quia id non. Sed inventore, maxime pariatur praesentium eveniet dolorum facere atque quibusdam! Voluptas dicta cumque ratione non consectetur corporis reiciendis quia nulla nobis, natus ipsum iste nostrum placeat laboriosam optio et officiis repudiandae aliquam praesentium. Beatae delectus ducimus ad illum, cupiditate voluptatibus praesentium est minima qui nulla eligendi deleniti optio accusantium.</div>
                    </div>
                    <div className="Agreeableness">
                        <div className="py-5"><h2 className="text-[2vw] bg-stone-500 text-white w-fit px-2 py-1 font-semibold opacity-80">Agreeableness</h2></div>
                        <div className="grid grid-cols-2">
                            <Facets openness={openness} />
                            <div className="opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, aut dignissimos recusandae impedit possimus ea optio, voluptatum perspiciatis, laudantium nesciunt asperiores numquam illo maxime! Modi, quas molestias. Fugit magnam veniam non a corporis libero voluptatum hic consectetur quis maxime incidunt corrupti, soluta quia amet dicta nulla ipsam atque dolorum asperiores? Id ad temporibus iste facere officia dolor, porro praesentium rerum minima excepturi molestiae officiis aperiam eveniet, saepe quisquam voluptatum, qui harum quam aliquid culpa beatae accusantium incidunt! Accusamus non sint quisquam suscipit! Quasi blanditiis illum quisquam expedita enim autem sed, in odio quibusdam repellendus nihil, eius est vel. Exercitationem, neque?</div>
                        </div>
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ea, impedit accusantium cupiditate minus maiores praesentium voluptas nesciunt. Laboriosam, quaerat! Corporis obcaecati quisquam praesentium. Ducimus sunt aliquid quam consequuntur voluptatum blanditiis molestias ipsa, cupiditate autem illum architecto dolorem praesentium in eaque laudantium incidunt suscipit illo. Molestiae ipsam quasi temporibus excepturi inventore incidunt similique magni doloribus quia impedit facere distinctio, eius numquam dolores eligendi amet pariatur, consequuntur mollitia magnam asperiores, perferendis est reprehenderit dignissimos. Dolores cumque minima sequi, aut ipsum, incidunt possimus quam eius eligendi, consequatur consectetur illum. Impedit eius nihil temporibus aliquid facilis beatae, vel quia mollitia molestias? Labore hic corporis quam esse deleniti eligendi eius deserunt nisi ea, earum magni praesentium nostrum beatae est. Magnam quod autem repellendus et provident quae. Corrupti cupiditate animi sequi incidunt iure distinctio porro voluptatibus hic consectetur alias tempore, quis ipsa suscipit itaque aliquam. Debitis, eligendi voluptas rem alias consequatur est cupiditate laudantium ea commodi illo consequuntur dolores. Reiciendis adipisci magni ad inventore commodi rerum nihil, iste est ipsam eius impedit, dolore ullam asperiores incidunt voluptatem architecto culpa, eaque beatae ipsum porro. Consectetur sint nemo, placeat quia aut ad aspernatur porro eveniet adipisci doloremque est iusto unde aliquid, hic dolorem maxime ullam delectus sit!</div>
                    </div>
                    <div className="Neuroticism">
                        <div className="py-5"><h2 className="text-[2vw] bg-purple-500 text-white w-fit px-2 py-1 font-semibold opacity-80">Neuroticism</h2></div>
                        <div className="grid grid-cols-2">
                            <Facets openness={openness} />
                            <div className="opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, aut dignissimos recusandae impedit possimus ea optio, voluptatum perspiciatis, laudantium nesciunt asperiores numquam illo maxime! Modi, quas molestias. Fugit magnam veniam non a corporis libero voluptatum hic consectetur quis maxime incidunt corrupti, soluta quia amet dicta nulla ipsam atque dolorum asperiores? Id ad temporibus iste facere officia dolor, porro praesentium rerum minima excepturi molestiae officiis aperiam eveniet, saepe quisquam voluptatum, qui harum quam aliquid culpa beatae accusantium incidunt! Accusamus non sint quisquam suscipit! Quasi blanditiis illum quisquam expedita enim autem sed, in odio quibusdam repellendus nihil, eius est vel. Exercitationem, neque?</div>
                        </div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sint fuga! Inventore accusamus velit nulla quidem nostrum soluta ad! Praesentium perferendis fugit pariatur unde alias molestiae, quas magni aspernatur. Similique dicta, dolore, nisi eum culpa tempore saepe nemo error numquam impedit voluptatem corporis delectus totam amet, fugiat enim iste eveniet aliquam veritatis doloribus? Ipsum quae quos suscipit impedit aut commodi rerum ipsam, molestiae blanditiis, dolore sunt fugiat quia animi, asperiores ab? Dolorem, provident at odit quibusdam atque explicabo similique ut fuga, reprehenderit dolor inventore ipsum doloribus culpa aliquam veritatis nostrum, deleniti repellendus aut ipsam illum recusandae obcaecati! Delectus laboriosam sunt voluptatum unde suscipit! Aperiam suscipit tenetur sit recusandae modi sapiente ad? Quas praesentium blanditiis animi vitae velit illum, repudiandae reiciendis magni veritatis. Aperiam ratione, molestiae voluptatibus est voluptates, sapiente, possimus delectus vitae amet quisquam quibusdam excepturi optio? Maiores ea laboriosam a? Nobis rerum dolores esse aliquam quos! Similique in nam iure odio modi architecto ratione repudiandae beatae, harum delectus quia incidunt dignissimos quo exercitationem, aut quos aspernatur unde ea, maxime excepturi. Nobis sed deserunt odit, vero, hic laboriosam culpa quasi mollitia eum doloremque ipsum sint rerum! Cumque quam laborum perspiciatis placeat voluptate, inventore hic, ea amet totam necessitatibus officiis aperiam.</div>
                    </div>
                </div>
                <div className="savereport pt-14 ">
                    <button className="flex items-center bg-green-600 text-white opacity-80 px-5 py-2 rounded-xl">Save as pdf&nbsp;&nbsp; <FaDownload /> </button>
                </div>
                <div className="toinsight py-14 flex justify-center">
                    <button className="flex items-center bg-blue-500 text-white opacity-80 px-10 py-3 rounded-xl">Get Insight&nbsp;&nbsp; <MdOutlineInsights className="text-2xl"/> </button>
                </div>
            </div>
        </>
    );
}