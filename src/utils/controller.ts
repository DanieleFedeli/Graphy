export class Controller {
  private _isPaused = false;
  private _isAborted = false;

  public abort() {
    this._isAborted = true;
  }

  public resume() {
    this._isPaused = false;
  }

  public pause() {
    this._isPaused = true;
  }

  public isPaused() {
    return this._isPaused;
  }

  public isAborted() {
    return this._isAborted;
  }
}
