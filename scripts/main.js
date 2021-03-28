    var lastIndex = 0;

    var images = document.querySelectorAll('.container_news img');

    images.forEach((item, index) => {
        document.querySelectorAll('.bullet-single')[index]
            .addEventListener('click', () => {
                let lastImage = document.querySelectorAll('.container_news img')[lastIndex];
                let actualImage = document.querySelectorAll('.container_news img')[index];

                //Resetar as bullets e setar a nova com base na imagem.

                document.querySelectorAll('.bullet-single')[lastIndex]
                    .classList.remove('active-bullet');

                ;
                document.querySelectorAll('.bullet-single')[index]
                    .classList.add('active-bullet');

                lastImage.style.opacity = 0;
                actualImage.style.opacity = 1;

                lastIndex = index;

            })
    })