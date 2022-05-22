import ApiService from './ApiService'

export class SegmentService extends ApiService {
  static async getSegments () {
    return this.httpService.get('/v1/segments')
  }
}
