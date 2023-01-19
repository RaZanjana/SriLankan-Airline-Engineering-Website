import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ContentServices } from 'src/content.service';


interface Filter {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator | undefined;

  media_count: string = ''

  headerData = [
    {
      subTitle: 'Gallery',
      title: 'Media library',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.',
      btnVisible: 'd-none',
      bgImg: 'assets/images/header-images/media.jpeg'
    }
  ]

  mediaItems = [
    {
      id: 1,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media1.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb1.jpeg'
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media2.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb2.jpeg'
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media3.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb3.jpeg'
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media4.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb4.jpeg'
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media5.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb5.jpeg'
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media6.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb6.jpeg'
    },
    {
      id: 7,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media7.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb7.jpeg'
    },
    {
      id: 8,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media8.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb8.jpeg'
    },
    {
      id: 9,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media9.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb9.jpeg'
    },
    {
      id: 10,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media10.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb10.jpeg'
    },
    {
      id: 11,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media11.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb11.jpeg'
    },
    {
      id: 12,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media12.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb12.jpeg'
    },
    {
      id: 13,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media13.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb13.jpeg'
    },
    {
      id: 14,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media14.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb14.jpeg'
    },
    {
      id: 15,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media15.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb15.jpeg'
    },
    {
      id: 16,
      title: 'Lorem ipsum dolor',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc: '',
      imageURL: 'assets/images/media/media16.jpeg',
      imgThumbnail: 'assets/images/media/media_thumb16.jpeg'
    },
  ]

  constructor(private contentService: ContentServices) {
    this.media_count = Object.keys(this.mediaItems).length.toString();
  }

  data: any = {
    PageCode: "PA001",
    InnerPageCode: "IP004",
    CompoentList: ["COM034", "COM007"],
    LanguageCode: "CLG001",
  }

  datas: any = {
    PageCode: "PA001",
    InnerPageCode: "IP001",
    CompoentList: ["COM007"],
    LanguageCode: "CLG001",
  }

  ngOnInit(): void {

    this.contentService.getAllComponents(this.data).subscribe(
      result => {
        this.headerData = JSON.parse(result[0].subComponent);
      }
    )

    this.contentService.getAllComponents(this.datas).subscribe(
      result => {
        this.mediaItems = JSON.parse(result[0].subComponent);
      }
    )
  }

}
